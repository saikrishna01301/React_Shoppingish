import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  authSignInWithEmailAndPassord,
} from "../../utilities/Firebase/Firebase";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import "./SignIn.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //onchange handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    //whenever you have to use a variable's value as a key in Object, you have to use it in [ ].
    setFormFields({ ...formFields, [name]: value }); //ex: fullname: saikrishna
  };

  //google_popup
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };
  //submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await authSignInWithEmailAndPassord(email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setFormFields(defaultFormFields);
  };
  ///////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  return (
    <div className="sign-in__container">
      <h2>Already have an account</h2>
      <span className="sub-text">Sign-in to your account</span>
      <form onSubmit={onSubmitHandler}>
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
        />

        <div className="button__container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
