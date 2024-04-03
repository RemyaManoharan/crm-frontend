import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types"

const UpdateTicket = ({msg, handleChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      
      <p>Please reply your message here or update the ticket</p>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
         value={msg}
         onChange={handleChange}
      />
      <div className="text-right mt-4">
        <Button variant="info" type= "submit">Reply</Button>
      </div>
    </Form>
  );
};
UpdateTicket.propTypes = {
    msg : PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
    handleOnSubmit : PropTypes.func.isRequired,
}

export default UpdateTicket;
