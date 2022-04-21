import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utilities/Firebase/Firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocumentRef = await createUserDocFromAuth(user);
    console.log(userDocumentRef);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};

export default SignIn;
