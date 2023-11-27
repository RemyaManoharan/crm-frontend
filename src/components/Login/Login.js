import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";


const Login = ({handleOnChange,email,password}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Client Login</h1>
          <hr />
          <Form>
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
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href="">Forget password?</a>
        </Col>
      </Row>

    </Container>
  );
};
Login.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
}


export default Login;
