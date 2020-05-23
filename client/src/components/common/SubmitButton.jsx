import React from "react";
import { Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

const SubmitButton = ({ title }) => {
  const buttonStyle = {
    padding: "8px 16px",
    lineHeight: "28px",
    fontSize: "16px",
  };

  return (
    <Button style={buttonStyle} variant="primary" type="submit" block>
      {title}
    </Button>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string,
};

export default SubmitButton;
