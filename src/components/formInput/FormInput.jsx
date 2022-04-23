import "./FormInput.scss";
const FormInput = (props) => {
  const { label, ...otherprops } = props;

  return (
    <div className="form__container">
      <input className="form__input" {...otherprops} />
      <label
        className={`${otherprops.value.length ? "shrink" : ""} form__label`}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
