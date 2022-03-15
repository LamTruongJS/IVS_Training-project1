import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

InputFiled.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
  errorIncorrect: PropTypes.string,
};

function InputFiled(props) {
  const { form, name, label, disable, errorIncorrect } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { error },
      }) => (
        <>
          <p className="form-label text-start">{label}</p>
          <input
            className="form-control"
            type="email"
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disable}
          />
          <p className="text-danger"> {error?.message ?? errorIncorrect}</p>
        </>
      )}
    ></Controller>
  );
}

export default InputFiled;
