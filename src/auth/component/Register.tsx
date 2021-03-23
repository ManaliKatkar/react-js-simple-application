import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import {
  ROUTES,
  RegistrationFormData,
  userPermissionsState,
  ROLES,
  PERMISSIONS,
} from "../../global";

import { authUserState } from "../state";
interface FormData {
  email: string;
  password: string;
  fullname: string;
}

export const RegisterContainer: React.FC = () => {
  const history = useHistory();
  const setAuthUser = useSetRecoilState(authUserState);
  const setUserPermissions = useSetRecoilState(userPermissionsState);
  const [formState, setFormState] = useState({});

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    // const firstName = event.target.value
    // this.setState({ firstName: firstName })
    // console.log(name, value)
    // setFormState({[name]: value});
    // const { target: { name, value } } = event
    // setFormState({ ...prevState,[name]: value });

    let temp_state = { ...formState };

    // setFormState( ({...temp_state,{ [name]: value } }));

    console.log("formState", formState);

    // console.log(this.state) ;
  };
  const handleSubmit = () => {
    console.log("formState", formState);
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

RegisterContainer.displayName = "RegisterContainer";
