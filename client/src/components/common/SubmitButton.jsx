import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { PropTypes } from "prop-types";

const SubmitButton = ({ title, isLoading }) => {
  const buttonStyle = {
    padding: "8px 16px",
    lineHeight: "28px",
    fontSize: "16px",
  };

  return (
    <Button style={buttonStyle} variant="primary" type="submit" block>
      {isLoading && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className="mr-2"
        />
      )}
      {title}
    </Button>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string,
};

export default SubmitButton;
