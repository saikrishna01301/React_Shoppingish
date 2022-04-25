import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utilities/Firebase/Firebase";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import "./SignUp.scss";

const defaultFormFields = {
  fullName: "",
  email: "",
  password: "",
  conformPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fullName, email, password, conformPassword } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    //whenever you have to use a variable's value as a key in Object, you have to use it in [ ].
    setFormFields({ ...formFields, [name]: value }); //ex: fullname: saikrishna
  };

  ///////////////////////////////////////////////////
  //submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (password === conformPassword) {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocFromAuth(user, {
          displayName: fullName,
        });
      }
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password": {
          alert("weak password min 6 char req");
          break;
        }
        case "auth/email-already-in-use": {
          console.log("user already exist");
          break;
        }
        default: {
          console.log("something went wrong in creation", error);
        }
      }
    }
    setFormFields(defaultFormFields);
  };
  ////////////////////////////////////////////////////
  return (
    <div className="sign-up__container">
      <h2>I don't have an account</h2>
      <span className="sub-text">Sign up to create new account</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Full Name"
          type="text"
          required
          onChange={onChangeHandler}
          name="fullName"
          value={fullName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
          min="6"
        />

        <FormInput
          label="Conform Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="conformPassword"
          value={conformPassword}
          min="6"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUp;
