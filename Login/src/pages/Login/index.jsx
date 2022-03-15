import { yupResolver } from "@hookform/resolvers/yup";
import { PropTypes } from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Logo from "../../asset/logo-hexabase.svg";
import InputField from "../../components/InputFiled";
import PasswordField from "../../components/PasswordField";
import "./style.scss";

Login.propTypes = {
  onSubmit: PropTypes.func,
  errorIncorrect: PropTypes.string,
};
Login.defaultValues = {
  onSubmit: null,
  errorIncorrect: "",
};
function Login(props) {
  const { errorIncorrect, onSubmit } = props;
  // console.log("error", errorIncorrect);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter an valid email address."),

    password: yup.string().required("Please enter your password."),
  });
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <form className="form__login" onSubmit={form.handleSubmit(handleSubmit)}>
      <img className="logo" src={Logo} alt="Logo" />
      <div className="form__input">
        <InputField
          name="email"
          label="Username or email address"
          form={form}
          errorIncorrect={errorIncorrect}
        ></InputField>
        <PasswordField
          name="password"
          label="Password"
          form={form}
          errorIncorrect={errorIncorrect}
        ></PasswordField>
        <button type="submit" className="btn btn-success w-100">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default Login;
