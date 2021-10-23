import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { LoginActions } from "./reducer";
import { useYup } from "../../hooks";
import Form from "../../components/Form";
import Users from "../../json/profile.json";

const Authentication = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { loginFormSchema } = useYup();

  const initialState = { username: "", password: "", rememberMe: false };

  const handleSubmit = async (values) => {
    const user = Users.find(
      (u) => u.username === values?.username && u.password === values?.password
    );
    if (user) {
      dispatch(LoginActions?.userSignIn(user));
      if (values.rememberMe) {
        window.localStorage.setItem("userProfile", JSON.stringify(user));
      }
      history.push("/");
    } else {
      dispatch(LoginActions?.loginFail("Login Failed"));
    }
  };

  return (
    <section className="section__container">
      <h1 className="section__title">Welcome Please Login</h1>
      <Formik
        initialValues={initialState}
        validationSchema={loginFormSchema}
        validateOnMount
        onSubmit={handleSubmit}
      >
        {(props) => <Form {...props} />}
      </Formik>
    </section>
  );
};

export default Authentication;
