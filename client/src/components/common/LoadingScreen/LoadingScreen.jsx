import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoadingScreen.scss";

const Loader = () => {
  return (
    <div className="loading-screen">
      <Spinner className="spinner" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
