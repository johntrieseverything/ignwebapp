import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ignlogo from './ignlogo.png'

class TopNavBar extends React.Component {

  render() {
    return (
      <Container>
        <Row className='shadow p-3 mb-5 rounded'>
          <Col sm={2}>
            <img src={ignlogo} alt="ignlogo" className="img-fluid" />
          </Col>
          <Col sm={2} className="darkTheme" style={{ fontSize: "30px" }}>
            {new Date().toLocaleString() + ""}
          </Col>
          <Col sm={8} className="darkTheme">
            hello
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TopNavBar