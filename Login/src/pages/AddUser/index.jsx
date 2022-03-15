import React, { useState } from "react";
import PropTypes from "prop-types";
import userApi from "../../api/userAPI";

AddUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function AddUser({ onSubmit }) {
  const [data, setData] = useState({});
  const handleValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const formValue = { [name]: value };
    setData(formValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(data);
    setData({ name: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="w-25 p-2 border border-1 m-2">
      <label className="form-label text-light">Thêm người dùng</label>
      <input
        type="text"
        className="form-control m-2 w-75"
        id="addUser"
        name="name"
        value={data.name}
        onChange={handleValue}
      />

      <button type="submit" className="btn btn-primary m-2">
        Hoàn tất
      </button>
    </form>
  );
}

export default AddUser;
