import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumbComp from "../../components/BreadCrumb/BreadCrumbComp";
import tickets from "../../assests/data/dummy-tickets.json";
import MessageHistory from "../../components/MessageHistory/MessageHistory";



const TicketPage = () => {
    const ticket = tickets[0];
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject : {ticket.subject}</div>
          <div className="date">Date : {ticket.addedAt}</div>
          <div className="status">Status : {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
