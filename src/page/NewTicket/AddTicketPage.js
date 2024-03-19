import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumbComp from "../../components/BreadCrumb/BreadCrumbComp";
import AddTicketForm from "../../components/AddTicketForm/AddTicketForm";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};

const AddTicketPage = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  //useEffect(() => {}, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form login submitted");
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            frmData={frmData}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicketPage;
