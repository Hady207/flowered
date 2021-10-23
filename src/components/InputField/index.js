import React from "react";
import { useField } from "formik";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form__input">
      <label>{label}</label>
      <input className="form__group--input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
