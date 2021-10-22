import React from "react";
import { Field } from "formik";
import { useSelector } from "react-redux";
import LoginSelectors from "../../pages/Authentication/selectors";
// Form Component,
const Form = (props) => {
  const { errorMessage } = useSelector(LoginSelectors);
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="form__input">
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          className="form__group--input"
          placeholder="username"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.username}
        />
      </div>

      <div className="form__input">
        <label htmlFor="username">password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form__group--input"
          placeholder="password"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.password}
        />
      </div>
      <div className="form__input form__input--box">
        <Field type="checkbox" id="rememberMe" name="rememberMe" />
        {/* <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="rememberMe"
        /> */}
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
