import * as yup from "yup";

const UseYup = () => {
  const loginFormSchema = yup.object().shape({
    username: yup.string().required("Please Enter Your Username"),
    password: yup.string().required("Please Enter Your Password"),
  });

  return {
    loginFormSchema,
  };
};

export default UseYup;
