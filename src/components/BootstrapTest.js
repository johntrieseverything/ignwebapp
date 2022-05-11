import { Container, Col, Row } from 'react-bootstrap';
import React from 'react'

export default function BootstrapTest() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>test</Col>
          <Col md={4}>test2</Col>
        </Row>
      </Container>
    </div>
  )
}

