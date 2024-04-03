import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumbComp from "../../components/BreadCrumb/BreadCrumbComp";
import tickets from "../../assests/data/dummy-tickets.json";
import MessageHistory from "../../components/MessageHistory/MessageHistory";
import UpdateTicket from "../../components/UpdateTicket/UpdateTicket";
import "./TicketPage.style.css";

const TicketPage = () => {
  const ticket = tickets[0];
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = () => {
    alert("ticket submitted");
  };
  return (
    <Container className="ticket-container">
      <Row>
        <Col>
          <BreadCrumbComp page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary summary-container">
          <div className="subject">Subject : {ticket.subject}</div>
          <div className="date">Date : {ticket.addedAt}</div>
          <div className="status">Status : {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleChange={handleChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
