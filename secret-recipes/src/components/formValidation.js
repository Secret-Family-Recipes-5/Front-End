import * as Yup from "yup";

const formValidation = Yup.object().shape({
  username: Yup.string()
    .min(6, "⚠️ Username must be at least 6 characters long.")
    .required("Username is Required"),
  primaryemail: Yup.string()
    .email("🤔 Please provide a valid email address")
    .required("⚠️ Email is Required"),
  password: Yup.string()
    .min(3, "⚠️ Password must be at least 3 characters long.")
    .required("Password is Required."),
});

export default formValidation;
