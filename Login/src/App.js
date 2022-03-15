import "./App.css";

import Login from "./pages/Login";
import { useEffect, useState } from "react";

import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/home/";
import userApi from "./api/userAPI";
import DetailUser from "./pages/DetailUser";

function App() {
  const [account, setAccount] = useState({});

  const history = useHistory();
  const handleLogin = (data) => {
    // console.log("App:", data);
    setAccount(data);
  };
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    (async () => {
      try {
        if (Object.keys(account).length > 0) {
          const response = await userApi.login(account);
          // console.log(response);
          localStorage.setItem("TOKEN", JSON.stringify(response?.token));

          if (response.token) {
            history.push("/home");
          }
        }
      } catch (error) {
        setErrorMessage("Email or Password is incorrect.");
      }
    })();
  }, [account]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login onSubmit={handleLogin} errorIncorrect={errorMessage} />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
