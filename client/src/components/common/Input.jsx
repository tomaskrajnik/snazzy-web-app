import React from "react";
import { Form } from "react-bootstrap";
import { PropTypes } from "prop-types";

const Input = ({
  name,
  type,
  placeholder,
  label,
  onChange,
  additionalButton,
  error,
}) => {
  const inputStyle = {
    border: "1px solid #CFD6E4",
    height: "44px",
    boxShadow: "inset 0px 1px 12px rgba(0, 0, 0, 0.03)",
  };
  const labelStyle = {
    fontSize: "14px",
    display: "block",
  };
  const additionalBtnStyle = {
    backgroundColor: "transparent",
    fontSize: "14px",
    border: "none",
    marginLeft: "auto",
  };
  const errorStyle = {
    fontSize: "14px",
    marginTop: "5px",
    color: "#ff6961",
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Form.Group className="mt-4">
      <Form.Label style={labelStyle}>
        <div className="d-flex">
          {label}
          {additionalButton && (
            <button
              type="button"
              onClick={handleClick}
              className="ml-auto"
              style={additionalBtnStyle}
            >
              {additionalButton}
            </button>
          )}
        </div>
      </Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyle}
        style={error ? { borderColor: "#ff6961" } : {}}
      />
      {error && <div style={errorStyle}>{error}</div>}
    </Form.Group>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  additionalButton: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
