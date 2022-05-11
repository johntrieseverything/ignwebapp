import React from 'react'

import ReactPlayer from 'react-player'
import { Container, Col, Row, Button } from 'react-bootstrap';

const MainVideo = (props) => {

  //console.log(props, "hello");
  function CorsWebsite() {
    window.open('https://cors-anywhere.herokuapp.com/corsdemo', '_blank')
  }

  if (!props.mainVideoURL) return (
    <div>
      <p>Can't see anything? Click this button</p>
      <p>
        {'>>>'}<Button onClick={CorsWebsite}>CORS</Button>{'<<<'}
      </p>
      <p>1. Go to this website</p>
      <p>2. Click "Request temporary access to demo server"</p>
      <p>3. Return to this website and refresh it</p>
    </div>
  )

  const tagsList = [];
  for (let i = 0; i < props.mainVideoTags.length; i++) {
    tagsList[i] = "#" + props.mainVideoTags[i] + "  "
  }

  return (
    <Container>
      <Row className='shadow p-3 mb-5 rounded' style={{ marginTop: "50px" }}>
        <Col>
          <ReactPlayer
            controls
            url={props.mainVideoURL}
            // height="75%"
            playing={props.videoCounter > 0 ? true:false}
            width="60vw"
            onEnded={() => {
              props.onVideoEnded(props.videoCounter)
              console.log("ended")
            }}
          />
          <h2 style={{ marginTop: "15px", width: "60vw" }}>{props.mainVideoTitle}</h2>
          <h5 style={{ marginTop: "20px", width: "60vw" }}>{props.mainVideoDescription}</h5>
          <Row>
            <Col sm={1} >
              <p>Tags:</p>
            </Col>
            <Col sm={11}>
              {tagsList}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default MainVideo