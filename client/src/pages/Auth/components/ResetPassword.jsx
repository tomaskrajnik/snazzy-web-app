import React from "react";
import { Row, Col, Form } from "react-bootstrap";

import Input from "../../../components/common/Input";
import SubmitButton from "../../../components/common/SubmitButton";

const PasswordReset = () => {
  return (
    <Row className="d-flex flex-column text-center margin-fix">
      <Col className="mr-auto ml-auto mt-5 text-left position-relative form-wrapper">
        <h2 className="mb-5">Insert new password</h2>
        <Form className="mt-5">
          <Input name="password" type="password" label="New password" />
          <Input name="password" type="password" label="Repeat new password" />
          <SubmitButton title="Save" />
        </Form>
      </Col>
    </Row>
  );
};

export default PasswordReset;
