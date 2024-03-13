// Validation scheme is to control the inputs in the form.
import * as yup from "yup";
// After the import part, we need to call string, number,... all separately. But we call them all with *.

// Regex
const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$";
export const schema = yup.object().shape({
  // For email
  email: yup.string().email().required(),
  // For age
  age: yup.number().min(18).max(100).integer().required(),
  // For password
  password: yup
    .string()
    .min(5, "Password must contain at least 5 characters.")
    .matches(
      regex,
      "Your password is not strong enough, please create a stronger password."
    )
    .required(),
  // For passwordConfirm
  passwordConfirm: yup.string().oneOf([yup.ref("password")]),
});
