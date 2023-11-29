import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ResetPassword = ({ handleOnChange, handelOnResetSubmit, email, formSwitcher}) => {
    
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handelOnResetSubmit}>
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

            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>Login Now?</a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handelOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ResetPassword;
