import InputFieldView from "./InputFieldView";
import { inputs } from "../constant";

const LoginPageView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/coin-logo.png" alt="logo" />
          <span>
            Coinmania <span className="text-warning">Login</span>
          </span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map(data => (
            <InputFieldView formik={formik} data={data} />
          ))}

          <button className="btn btn-warning w-100">Send</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageView;
