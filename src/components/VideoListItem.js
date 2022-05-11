import React from 'react'
import { motion } from 'framer-motion';
import { Container, Col, Row } from 'react-bootstrap';

const VideoItem = (props) => {

  // console.log(props);

  if (!props.thumbNailUrl) return <div>Loading...</div>

  return (
      <motion.div
        whileHover={{ scale: 1.05 }}>
        <Container className='shadow p-3 mb-3 rounded'>
          <Row style={{ alignItems: "center" }}>
            <Col onClick={(event) => {
              window.scrollTo(0, 0)
              event.preventDefault()
              props.onVideoSelect(props)
              // console.log(props)
            }}>
              <img className="img-fluid" src={props.thumbNailUrl} alt="thumbnail" />
            </Col>
            <Col>
              <p style={{ fontSize: "1.25vw" }}>{props.title}</p>
            </Col>
          </Row>
        </Container >
      </motion.div>
  )
}

export default VideoItem;
