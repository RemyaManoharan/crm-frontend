import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumbComp from "../../components/BreadCrumb/BreadCrumbComp";
import SearchForm from "../../components/SearchForm/SearchForm";
import TicketTableComp from "../../components/TicketTable/TicketTableComp";
import tickets from "../../assests/data/dummy-tickets.json";

const TicketListPage = () => {
  const [searchString, setSearchString] = useState("");
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    const newTickets = tickets.filter((item) =>
      item.subject.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredTickets(newTickets);
  }, [searchString]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm
            handleOnChange={handleOnChange}
            searchString={searchString}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTableComp tickets={filteredTickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketListPage;
