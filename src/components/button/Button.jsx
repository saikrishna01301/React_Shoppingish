import "./Button.scss";

const BUTTON_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = (props) => {
  const { buttonType, children, ...otherprops } = props;

  return (
    <button
      {...otherprops}
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
    >
      {children}
    </button>
  );
};
export default Button;
