import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthSelectors from "../pages/Authentication/selectors";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Auth from "../pages/Authentication";

function PrivateRoute({ children, ...rest }) {
  const user = JSON.parse(window.localStorage.getItem("userProfile"));
  const { userProfile } = useSelector(AuthSelectors);
  console.log("protected route", userProfile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user || userProfile ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// Handle navigational routes using react-router-dom
const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/details">
        <Details />
      </PrivateRoute>
      <Route exact path="/login">
        <Auth />
      </Route>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
