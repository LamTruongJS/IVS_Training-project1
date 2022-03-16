import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Switch, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import UserList from "../UserList";
import "./style.scss";
import DetailUser from "../DetailUser";
import userApi from "./../../api/userAPI";
import AddUser from "../AddUser";
Home.propTypes = {};

function Home(props) {
  const match = useRouteMatch();
  const [userList, setUserList] = useState();
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await userApi.getAll({});

        setUserList(response.workspaces);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [data]);
  const handleAddData = async (data) => {
    await userApi.add(data);

    await setData(data);
  };
  return (
    <div className="home_page">
      <Switch>
        <Route path={match.url} exact>
          <UserList userList={userList} onSubmit={handleAddData} />
        </Route>
        <Route path={`${match.url}/:id`}>
          <DetailUser />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
