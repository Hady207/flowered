import React from "react";
import { Field } from "formik";
import { useSelector } from "react-redux";
import LoginSelectors from "../../pages/Authentication/selectors";
import InputField from "../InputField";

// Form Component,
const Form = (props) => {
  const { errorMessage } = useSelector(LoginSelectors);

  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <InputField
        id="username"
        name="username"
        label="Username"
        placeholder="Username"
      />

      <InputField
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        label="Password"
      />
      <div className="form__input form__input--box">
        <Field type="checkbox" id="rememberMe" name="rememberMe" />
        <label htmlFor="vehicle1">Remember me</label>
      </div>
      {errorMessage && <p className="form__error--message">{errorMessage}</p>}
      <button type="submit" className="form__button">
        login
      </button>
    </form>
  );
};

export default Form;
