import React, { Component } from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";
import Input from "../../../components/common/Input";
import SubmitButton from "../../../components/common/SubmitButton";
import LoadingScreen from "./../../../components/common/LoadingScreen/LoadingScreen";
import Joi from "joi-browser";

import authService from "./../../../services/authService";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      errorMessage: "",
      inputErrorMessages: {},
      user: {
        _id: "",
        password: "",
        repeated_password: "",
      },
      isSuccess: false,
      buttonLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const token = this.props.match.params.token;
    if (!token) {
      return <Redirect to="/not-found" />;
    }
    try {
      const userId = (await authService.verifyRecoveryLink(token)).data;
      this.setState({
        isLoading: false,
        user: {
          _id: userId,
        },
      });
    } catch ({ response: err }) {
      console.log(err);
      this.setState({
        isLoading: false,
        errorMessage: err.data,
      });
    }
  }

  handleChange({ currentTarget: input }) {
    let user = { ...this.state.user };
    const { name, value } = input;
    user[name] = value;
    this.setState({
      user,
    });
  }
  schema = {
    _id: Joi.string(),
    password: Joi.string().min(8).max(15).required().label("Password"),
    repeated_password: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .error(() => {
        return {
          message: "Passwords must match",
        };
      }),
  };

  validate = () => {
    const { error } = Joi.validate(this.state.user, this.schema, {
      abortEarly: false,
    });
    if (!error) return {};
    const errors = {};
    error.details.map((item) => (errors[item.path[0]] = item.message));
    return errors;
  };

  async callApi(credentials) {
    try {
      await authService.updatePassword(credentials);
      this.setState({
        isSuccess: true,
        buttonLoading: false,
      });
    } catch ({ response: err }) {
      if (err.data.includes("match")) {
        let inputErrorMessages = {
          repeated_password: err.data,
        };
        this.setState({
          isLoading: false,
          inputErrorMessages,
        });
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputErrorMessages = this.validate();
    this.setState({ inputErrorMessages });

    const credentials = {
      _id: this.state.user._id,
      password: this.state.user.password,
      repeated_password: this.state.user.repeated_password,
    };

    this.callApi(credentials);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <LoadingScreen />
        ) : (
          <Row className="d-flex flex-column text-center margin-fix">
            <Col className="mr-auto ml-auto mt-5 text-left position-relative form-wrapper">
              <h2 className="mb-5">Insert new password</h2>
              {this.state.errorMessage && (
                <Alert variant="danger">{this.state.errorMessage}</Alert>
              )}
              {!this.state.errorMessage && (
                <Form onSubmit={this.handleSubmit} className="mt-5">
                  <Input
                    name="password"
                    type="password"
                    label="New password"
                    onChange={this.handleChange}
                    error={this.state.inputErrorMessages.password}
                  />
                  <Input
                    name="repeated_password"
                    type="password"
                    label="Repeat new password"
                    onChange={this.handleChange}
                    error={this.state.inputErrorMessages.repeated_password}
                  />
                  {this.state.isSuccess && (
                    <Alert variant="success">
                      <b>Success! </b>
                      Your password has been successfully changed.
                      <Link to="/" className="success-alert-link">
                        {" "}
                        Back to Log in page.
                      </Link>
                    </Alert>
                  )}
                  <SubmitButton
                    title="Save"
                    isLoading={this.state.buttonLoading}
                  ></SubmitButton>
                </Form>
              )}
            </Col>
          </Row>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(ResetPassword);
