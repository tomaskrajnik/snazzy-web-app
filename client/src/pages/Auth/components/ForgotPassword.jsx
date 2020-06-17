import React, { useState } from "react";
import { Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import Joi from "joi-browser";

import Input from "../../../components/common/Input";
import SubmitButton from "../../../components/common/SubmitButton";
import LoadingScreen from "./../../../components/common/LoadingScreen/LoadingScreen";

import AuthService from "./../../../services/authService";

const ForgotPassword = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const schema = {
    email: Joi.string().required().email().label("Email"),
  };

  const handleChange = ({ currentTarget: input }) => {
    const credentials = { ...user };
    const { name, value } = input;
    credentials[name] = value;
    setUser(credentials);
  };

  const validate = () => {
    const { error } = Joi.validate(user, schema, { abortEarly: false });
    if (!error) return {};
    const errors = {};
    error.details.map((item) => (errors[item.path[0]] = item.message));
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorMessages = validate();
    setErrors(errorMessages);
    setIsLoading(true);
    try {
      await AuthService.forgotPassword(user);
      setIsLoading(false);
      setIsSuccess(true);
    } catch ({ response: err }) {
      setIsLoading(false);
      errorMessages = {
        email: err.data,
      };
      setErrors(errorMessages);
    }
  };

  return (
    <React.Fragment>
      <Row className="d-flex flex-column text-center margin-fix">
        <Col className="mr-auto ml-auto mt-5 text-left position-relative form-wrapper">
          <h2 className="mb-5">Reset your password</h2>
          <Form className="mt-5" onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              error={errors.email}
              onChange={handleChange}
              placeholder="Insert your email"
            />
            {isSuccess && (
              <Alert variant="success">
                <b>Success! </b>
                We have sent an email to {user.email} containing recovery link.
              </Alert>
            )}

            <SubmitButton
              title="Send email"
              isLoading={isLoading}
            ></SubmitButton>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ForgotPassword;
