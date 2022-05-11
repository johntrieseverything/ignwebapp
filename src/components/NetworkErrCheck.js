import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import FetchData from './FetchData';
import { Button } from 'bootstrap';

const URL = "https://ign-apis.herokuapp.com/videos";
const corsURL = "https://cors-anywhere.herokuapp.com/https://ign-apis.herokuapp.com/videos";
//const testURL = "https://jsonplaceholder.typicode.com/posts"

class NetworkErrCheck extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chooseURL: URL }
  }

  networkButtonClick = (event) => {
    this.props.networkButtonClick(this.state.chooseURL);
    event.preventDefault();
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => response.json())
      .catch((error) => {
        // console.log(JSON.stringify(error))
        console.log(error.message)
        if (error.message = "response.json is not a function") {
          this.setState({ chooseURL: URL })
          // console.log(chooseURL)

        }
        else if (error.message = "Network Error") {
          this.setState({ chooseURL: corsURL })
        }
      })
  }

  render() {
    return (
      <div>
        {console.log("hello " + this.state.chooseURL)}
        <button onClick={this.networkButtonClick}>
          test
          {/* <FetchData /> */}
        </button>
      </div >
    )
  }
}

export default NetworkErrCheck