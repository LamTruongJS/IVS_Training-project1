import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";
UserList.propTypes = {
  userList: PropTypes.array,
};
UserList.defaultProps = {
  userList: [],
};
function UserList({ userList }) {
  //   const [userList, setUserList] = useState([]);
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await userApi.getAll({});
  //         console.log(response);
  //         await setUserList(response.workspaces);
  //       } catch (err) {}
  //     })();
  //   }, []);
  console.log("detail", userList);
  return (
    <div className="row cart m-0">
      {userList.map((user) => (
        <div
          className="col-xs-10 col-md-2  border border-1 cart__item"
          key={user["workspace_id"]}
        >
          <p>ID: {user["workspace_id"]}</p>
          <p>Name: {user["workspace_name"]}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
