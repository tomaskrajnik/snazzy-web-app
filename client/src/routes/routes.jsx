import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./../pages/Auth/Auth";
import HomePage from "./../pages/HomePage/HomePage";
import NotFound from "./../pages/NotFound/NotFound";
import { PropTypes } from "prop-types";

const Routes = ({ token, saveToken }) => {
  return (
    <Switch>
      <Route path="/auth/log-in">
        <Auth token={token} saveToken={saveToken} />
      </Route>
      <Route path="/auth/register">
        <Auth token={token} saveToken={saveToken} />
      </Route>
      <Route path="/dashboard">
        <HomePage token={token} removeToken={saveToken} />
      </Route>
      <Route path="/not-found">
        <NotFound />
      </Route>
      <Redirect from="/auth" exact to="/auth/log-in" />
      <Redirect from="/log-in" exact to="/auth/log-in" />
      <Redirect from="/register" exact to="/auth/register" />
      <Redirect from="/" exact to="/dashboard" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

Routes.propTypes = {
  token: PropTypes.string,
  saveToken: PropTypes.func,
};

export default Routes;
