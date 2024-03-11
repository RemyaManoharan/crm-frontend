import React from 'react';
import {Container,Row, Col,Button} from 'react-bootstrap'

const DashboardPage = () => {
  return (
    <Container>
        <Row>
           <Col className='text-center mt-5 mb-2'>
<Button variant='info' style={{'font-size': '2rem', padding:"10px 30px"}}> Add New Ticket</Button>
           </Col> 
        </Row>
        <Row>
           <Col className='text-center mt-5 mb-2'>
<Button variant='info' style={{'font-size': '2rem', padding:"10px 30px"}}> Add New Ticket</Button>
           </Col> 
        </Row>
      
    </Container>
  )
}

export default DashboardPage
