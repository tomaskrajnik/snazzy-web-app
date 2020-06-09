import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import Input from "../../../components/common/Input";
import SubmitButton from "../../../components/common/SubmitButton";
import LoadingScreen from "./../../../components/common/LoadingScreen/LoadingScreen";

import AuthService from "./../../../services/authService";

const ForgotPassword = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    const credentials = { ...user };
    const { name, value } = input;
    credentials[name] = value;
    setUser(credentials);
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await AuthService.forgotPassword(user).data;
      setIsLoading(false);
    } catch ({ response: err }) {
      console.log("smth wrong");
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Row className="d-flex flex-column text-center margin-fix">
          <Col className="mr-auto ml-auto mt-5 text-left position-relative form-wrapper">
            <h2 className="mb-5">Reset your password</h2>
            <Form className="mt-5" onSubmit={handleSubmit}>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Insert your email"
              />
              <SubmitButton title="Send email" />
            </Form>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default ForgotPassword;
