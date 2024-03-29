import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTableComp from "../../components/TicketTable/TicketTableComp";
import tickets from "../../assests/data/dummy-tickets.json";
import BreadCrumbComp from "../../components/BreadCrumb/BreadCrumbComp";
const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            {" "}
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total tickets : 50</div>
          <div>Pending tickets :5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTableComp tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
