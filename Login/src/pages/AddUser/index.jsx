import React, { useState } from "react";
import PropTypes from "prop-types";
import userApi from "../../api/userAPI";
import "./style.scss";
import Close from "../../asset/close.png";
import Plus from "../../asset/plus.svg";
AddUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function AddUser({ onSubmit }) {
  const [data, setData] = useState({
    name: "",
  });
  const [show, setShow] = useState(false);
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
  const handleShowForm = () => {
    setShow(!show);
  };
  return (
    <div className="col-md-3">
      {show ? (
        <form onSubmit={handleSubmit} className="border border-1 form-add m-2 ">
          <input
            type="text"
            className="m-2"
            id="addUser"
            name="name"
            value={data.name}
            onChange={handleValue}
            placeholder="WordSpace"
          />
          <button type="submit" className="btn btn-primary mx-2 d-inline">
            Hoàn tất
          </button>
          <div className="d-inline mx-3" onClick={handleShowForm}>
            <img src={Close} alt="Close" />
          </div>
        </form>
      ) : (
        <div className="form-first m-2 p-2" onClick={handleShowForm}>
          <img src={Plus} alt="Plus" style={{ width: "20px" }} />
          <span className="m-2">Thêm WorkSpaces</span>
        </div>
      )}
    </div>
  );
}

export default AddUser;
