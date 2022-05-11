import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Col, Row } from 'react-bootstrap';

import FetchData from './components/FetchData';
import MainVideo from './components/MainVideo';
import VideoList from './components/VideoList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      dataList: [],
      mainVideoURL: "",
      mainVideoTitle: "",
      mainVideoDescription: "",
      mainVideoTags: "",
      videoCounter: 0,
      // chooseURL: "",
    };
  }

  componentDidMount() {
    //console.log(this.state.dataList);
  }

  componentDidUpdate() {
    //onsole.log(this.state.dataList);
  }

  onVideoSelect = (video) => {
    this.setState({
      mainVideoURL: video.videoURL,
      mainVideoTitle: video.title,
      mainVideoDescription: video.description,
      mainVideoTags: video.tags,
    });
    console.log(video);
  }

  onVideoEnded = (videoCounter) => {
    this.setState({
      videoCounter: this.state.videoCounter + 1,
      mainVideoURL: this.state.dataList[0][videoCounter],
      mainVideoTitle: this.state.dataList[1][videoCounter],
      mainVideoDescription: this.state.dataList[2][videoCounter],
      mainVideoTags: this.state.dataList[4][videoCounter],
    });
    console.log(videoCounter)
  }

  handleDataListChange = (dataList) => {
    // console.log("handleDataListChange passed", dataList)
    this.setState({ dataList: dataList })
  }

  handleMainVideoChange = (mainVideo) => {

    if (mainVideo) {
      this.setState({
        mainVideoURL: mainVideo.mainVideoURL,
        mainVideoTitle: mainVideo.mainVideoTitle,
        mainVideoDescription: mainVideo.mainVideoDescription,
        mainVideoTags: mainVideo.mainVideoTags,
      })
    }
    else {
      this.setState({ mainVideoURL: "youtube.com" })
    }
  }

  render() {

    return (
      <div >
        <FetchData
          handleDataListChange={this.handleDataListChange}
          handleMainVideoChange={this.handleMainVideoChange}
          // chosenURL={this.state.chooseURL}
        />
        <Container fluid className='darkTheme'>
          <Row>
            <Col sm={8}>
              <MainVideo
                mainVideoURL={this.state.mainVideoURL}
                mainVideoTitle={this.state.mainVideoTitle}
                mainVideoDescription={this.state.mainVideoDescription}
                mainVideoTags={this.state.mainVideoTags}
                videoCounter={this.state.videoCounter}
                onVideoEnded={this.onVideoEnded}
              />
            </Col>
            <Col sm={4}>
              <VideoList
                dataList={this.state.dataList}
                onVideoSelect={this.onVideoSelect}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
