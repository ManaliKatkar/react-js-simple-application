import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";

import { usersQuery } from "../../api/queries";
import { RegistrationFormData } from "../../global";

import { authUserState } from "../state";

export const LoginContainer: React.FC = () => {
  const history = useHistory();
  const setAuthUser = useSetRecoilState(authUserState);

  const { isSuccess, data } = useQuery("userData", usersQuery);

  const [formState, setFormState] = useState<RegistrationFormData>({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    event.preventDefault();

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (isSuccess && data) {
      console.log(data, typeof data);
      data?.users.forEach((element: RegistrationFormData) => {
        // will change security after for password and other things
        if (true) {
          history.push("/home");
          // setAuthUser(element);
        }
      });
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Sign In</h2>
          <form>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={handleChange} />
            </div>
            <div className="submit" onClick={handleSubmit}>
              <button>Login Here ...</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

LoginContainer.displayName = "LoginContainer";
