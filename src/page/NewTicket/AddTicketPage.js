import React from 'react';
import {Container, Row,Col} from  'react-bootstrap';
import BreadCrumbComp from '../../components/BreadCrumb/BreadCrumbComp';
import AddTicketForm from '../../components/AddTicketForm/AddTicketForm';

const AddTicketPage = () => {
const handleOnChange = e => {
    const {name,value} = e.target;
    console.log(name,value)
}



    //const handleSubmit
  return (
   <Container>
    <Row>
        <Col>
        <BreadCrumbComp page="New Ticket"/>
        </Col>
    </Row>
    <Row>
<Col>
<AddTicketForm handleOnChange={handleOnChange}/>
</Col>
    </Row>
   </Container>
  )
}

export default AddTicketPage
