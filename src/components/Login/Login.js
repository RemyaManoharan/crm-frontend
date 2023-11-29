import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Login = ({
  handleOnChange,
  handleOnSubmit,
  email,
  password,
  formSwitcher,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                required
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
        <div onClick={() => formSwitcher("reset")}>
          <a href="#!" >
            Forget password?
          </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
