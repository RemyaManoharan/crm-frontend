import React , {useState , useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumbComp from "../../components/BreadCrumb/BreadCrumbComp";
import SearchForm from "../../components/SearchForm/SearchForm";
import TicketTableComp from "../../components/TicketTable/TicketTableComp";
import tickets from "../../assests/data/dummy-tickets.json"
const TicketListPage = () => {
  const [str, setStr] = useState('');
  
  useEffect(() => {

  },[str])
const handleOnChange = e => {
  setStr(e.target.value)
  console.log(e.target);
}

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="Ticket Lists" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
        <TicketTableComp tickets={tickets}/>
        </Col>
      </Row>
    </Container>
  );
};

export default TicketListPage;
