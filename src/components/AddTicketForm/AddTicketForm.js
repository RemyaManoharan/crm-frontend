import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddTicketForm = ({ handleSubmit, handleOnChange }) => {





  return (
    <div class="p-5 mb-4 bg-light rounded-5">
      <div class="container bg-light p-5">
        <Form autoComplete="off" class="col-md-8 fs-4" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={1}>Subject</Form.Label>
            <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              //value={email}
              // onChange={handleOnChange}
              required
            />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-1">
            <Form.Label column sm={1}>Issue Found</Form.Label>
            <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              // value={password}
              onChange={handleOnChange}
              required
            />
            </Col>
            
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              name="details"
              rows="5"
              // value={password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Button variant="info" type="submit" block>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddTicketForm;
