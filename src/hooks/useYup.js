import * as yup from "yup";

const UseYup = () => {
  const loginFormSchema = yup.object().shape({
    username: yup.string().required({ text: "enter_mobile_number" }),
    password: yup.string().required({ text: "enter_password" }),
  });

  return {
    loginFormSchema,
  };
};

export default UseYup;
