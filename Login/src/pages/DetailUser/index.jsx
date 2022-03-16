import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import userApi from "../../api/userAPI";
import { useParams, useRouteMatch } from "react-router-dom";
DetailUser.propTypes = {};

function DetailUser(props) {
  const [user, setUser] = useState([]);
  const match = useRouteMatch();
  console.log(match);
  useEffect(() => {
    (async () => {
      const response = await userApi.get(match.params.id);
      console.log(response.workspaces);
      setUser(response.workspaces);
    })();
  }, []);
  return (
    <div className="row p-4 text-light">
      Đây là trang DetailUser{user["workspace_id"]}
    </div>
  );
}

export default DetailUser;
