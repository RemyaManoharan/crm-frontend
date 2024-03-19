import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";


const AddTicketForm = ({ handleSubmit, handleOnChange, frmData }) => {
  console.log(frmData)
  return (
    <div className="p-5 mb-4 bg-light rounded-5" style={{ maxWidth: "600px", margin: "0 auto"}}>
      <div className="container bg-light p-5">
        <Form
          autoComplete="off"
         
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-4">
            <Form.Label column sm={1}>
              Subject
            </Form.Label>
          
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={frmData.subject}
                onChange={handleOnChange}
                required
              />
           
          </Form.Group>

          <Form.Group  className="mb-4">
            <Form.Label column sm={1}>
              Issue Found
            </Form.Label>
           
              <Form.Control
                type="date"
                name="issueDate"
                value={frmData.issueDate}
                onChange={handleOnChange}
                required
              />
           
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              name="detail"
              rows="5"
              value={frmData.detail}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
AddTicketForm.propTypes = {
  handleSubmit : PropTypes.func.isRequired,
  handleOnChange:PropTypes.func.isRequired ,
  frmData : PropTypes.object.isRequired ,
};
export default AddTicketForm;
