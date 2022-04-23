import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import "./Authentication.scss";

// import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";

const Authentication = () => {
  //using redirect
  // useEffect(() => {
  //   const redirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) await createUserDocFromAuth(response.user);
  //   };
  //   redirect();
  // }, []);

  return (
    <div className="auth__container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
