import React from "react";
import { Form, Row, Col } from "react-bootstrap";

import PropTypes from 'prop-types'; 

const SearchForm = ({ handleOnChange, str}) => {
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Search:
            </Form.Label>
            <Col ms={8}>
              <Form.Control name="searchStr" 
              placeholder="Search" 
              onChange={handleOnChange}
              value={str}
              />
            </Col>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
    handleOnChange : PropTypes.func.isRequired,
    str : PropTypes.string.isRequired
};
export default SearchForm;
