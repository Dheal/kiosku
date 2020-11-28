// import logo from './logo.svg';
// import './App.css';
import Home from './page/Home';
import Login from "./page/Login";
import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrivateRoute from "./routes/privateRoute";

function App() {
  const dispatch = useDispatch();

  //check localstorage
  useEffect(() => {
    const userName = localStorage.getItem("userStatus");


    //ngecek validitas localstorage, disimpan dalam bentuk token

    dispatch({
      type: "CHANGE_USER_LOGIN_STATUS",
      payload: {
        loginStatus: userName,
      },
    });

  }, []);

  return (
    <div>
     <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
