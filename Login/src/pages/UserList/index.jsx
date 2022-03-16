import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";
import { useHistory, useRouteMatch } from "react-router-dom";
import AddUser from "../AddUser";
UserList.propTypes = {
  userList: PropTypes.array,
  onSubmit: PropTypes.func,
};
UserList.defaultProps = {
  userList: [],
  onSubmit: null,
};
function UserList({ userList, onSubmit }) {
  const history = useHistory();
  const match = useRouteMatch();

  const handleDetailUser = (id) => {
    console.log(id);
    history.push(`${match.path}/${id}`);
  };
  return (
    <div className="row cart m-0">
      {userList.map((user) => (
        <div
          onClick={() => handleDetailUser(user["workspace_id"])}
          className="col-xs-10 col-md-3"
          key={user["workspace_id"]}
        >
          <div className="cart__item m-2 p-2">
            <p>{user["workspace_name"]}</p>
          </div>
        </div>
      ))}
      <AddUser onSubmit={onSubmit} />
    </div>
  );
}

export default UserList;
