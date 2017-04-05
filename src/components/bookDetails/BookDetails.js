import React, { Component } from 'react';
import { Row, Col, Well } from 'react-bootstrap';
import "./BookDetails.css";

class BookDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
    <Row className="details">
        <Col md={12}>
            <Well>
            stuff
            </Well>
        </Col>
    </Row>
    )
  }
}

export default BookDetails;