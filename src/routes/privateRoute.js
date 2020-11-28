import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const userStatus = useSelector((state) => state.user.isLogin);
  console.log(userStatus)
  return (
    <Route {...props}>
      {userStatus ? props.children : <Redirect to={{ pathname: "/login" }} />}
    </Route>
  );
};

export default PrivateRoute;