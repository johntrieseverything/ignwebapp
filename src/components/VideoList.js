import React from 'react'

import { Accordion, Container, Row } from 'react-bootstrap';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {

  // console.log(props);

  if (!props.dataList && props.dataList.length > 0) {
    return <div>Loading...</div>
  }

  const listOfVideos = props.dataList[3]?.map((element, index) =>
    <VideoListItem
      key={index}
      thumbNailUrl={element}
      tags={props.dataList[4][index]}
      description={props.dataList[2][index]}
      title={props.dataList[1][index]}
      videoURL={props.dataList[0][index]}
      onVideoSelect={props.onVideoSelect}
    />)

  const mainList = listOfVideos?.slice(0, 4);
  const loadMoreList = listOfVideos?.slice(5, listOfVideos.length);

  return (
    <Container >
      <Row style={{ marginTop: "50px" }}>
        <h1>Suggested Videos</h1>
      </Row>
      <Row >
        {mainList}
      </Row>
      <Row >
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Button className='darkTheme'>
              Load More...
            </Accordion.Button>
            <Accordion.Body className='darkTheme'>
              {loadMoreList}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  )
}

export default VideoList
