import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import eye from "../asset/view.png";
import hidden from "../asset/hidden.png";
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
  errorIncorrect: PropTypes.string,
};

function PasswordField(props) {
  const { form, name, label, disable, errorIncorrect } = props;
  const { control } = form;
  const [values, setValues] = useState({ showPassword: false });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <>
          <div className="mb-0 d-flex justify-content-between">
            <label className="">{label}</label>
            <p className="text-primary">Forgot Password?</p>
          </div>
          <div className="passwordField">
            <input
              className="form-control"
              type={values.showPassword ? "text" : "password"}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              value={value}
              disabled={disable}
            />
            <div className="icon">
              {values.showPassword === false ? (
                <img
                  src={eye}
                  style={{ maxWidth: "20px" }}
                  alt="hiển thị"
                  onClick={handleClickShowPassword}
                />
              ) : (
                <img
                  src={hidden}
                  style={{ maxWidth: "20px" }}
                  alt="hiển thị"
                  onClick={handleClickShowPassword}
                />
              )}
            </div>
          </div>
          <p className="text-danger">{error?.message ?? errorIncorrect}</p>
        </>
      )}
    ></Controller>
  );
}

export default PasswordField;
