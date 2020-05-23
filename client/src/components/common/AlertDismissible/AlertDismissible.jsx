import React, { useState } from "react";
import { Alert } from "react-bootstrap";

import "./AlertDismissible.scss";

const AlertDismissible = ({ title, text, linkName, linkTo }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        className="alert-dismissible"
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <p>
          <span>{title}</span>
          {text}
        </p>
        <a href={linkTo} target="_ blank">
          {linkName}
        </a>
      </Alert>
    );
  }
  return null;
};

export default AlertDismissible;
