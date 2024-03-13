import { useFormik } from "formik";
import { schema } from "../schema";
import LoginPageView from "../views/LoginPageView";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPageController = () => {
  const navigate = useNavigate();
  // hook that allows us to use all the features of formik
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },

    //validation scheme
    // Check whether the data in the inputs comply with the conditions in the schema
    // will. If not valid, it keeps errors in error state
    validationSchema: schema,

    //function that will run when the form is submitted
    //automatically prevent page refresh
    // Takes the data from the form as the 1st parameter
    // Takes actions that can be run on the form as the 2nd parameter
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });

  return <LoginPageView formik={formik} />;
};

export default LoginPageController;
