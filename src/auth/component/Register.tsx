import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import {
  RegistrationFormData,
} from "../../global";

import { authUserState } from "../state";

export const RegisterContainer: React.FC = () => {
  const history = useHistory();
  const setAuthUser = useSetRecoilState(authUserState);

  const [formState, setFormState] = useState<RegistrationFormData>({
    email: "",
    password: "",
    fname: "",
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
  };

  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Sign In</h2>
          <form>
            <div className="fullname">
              <label htmlFor="fullname">Full Name</label>
              <input type="fullname" name="fullname" onChange={handleChange} />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={handleChange} />
            </div>
            <div className="submit" onClick={handleSubmit}>
              <button>Register Me</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

RegisterContainer.displayName = "RegisterContainer";
