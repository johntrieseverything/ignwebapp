import React, { useState, useEffect } from 'react'
import axios from 'axios';

const url = "https://ign-apis.herokuapp.com/videos";
const CORSurl = "https://cors-anywhere.herokuapp.com/https://ign-apis.herokuapp.com/videos";
//const testUrl = "https://jsonplaceholder.typicode.com/posts"
var chooseURL = "https://ign-apis.herokuapp.com/videos";

function FetchData(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
  }, [posts]);

  const getData = async () => {
    const test = await axios.get(url)
      .catch((error) => {
        //console.log(error.message)
        if (error.message === "Network Error") {
          chooseURL = CORSurl;
          //console.log(chooseURL)
        }
      })

    //console.log(chooseURL)

    const response = await axios.get(chooseURL)

    if (response.data) {
      setPosts(response.data);
      //console.log(response.data);

      const videoList = [];
      const titleList = [];
      const descriptionList = [];
      const thumbnailsList = [];
      const tagsList = [];

      if (response.data && response.data.data.length > 0) {
        for (let i = 0; i < response.data.data.length; i++) {
          for (let j = 0; j < response.data.data.length; j++) {
            for (let k = 0; k < response.data.data.length; k++) {
              for (let f = 0; f < response.data.data.length; f++) {
                for (let g = 0; g < response.data.data.length; g++) {
                  videoList[i] = response.data.data[i].assets[0].url;
                  titleList[j] = response.data.data[j].metadata.title;
                  descriptionList[k] = response.data.data[k].metadata.description;
                  thumbnailsList[f] = response.data.data[f].thumbnails[0].url;
                  tagsList[g] = response.data.data[g].tags;
                }
              }
            }
          }
        }
      }

      const dataList = [videoList, titleList, descriptionList, thumbnailsList, tagsList];

      //console.log(dataList);

      props.handleDataListChange(dataList);
      props.handleMainVideoChange(
        {
          mainVideoURL: dataList[0][9],
          mainVideoTitle: dataList[1][9],
          mainVideoDescription: dataList[2][9],
          mainVideoTags: dataList[4][9],
        }
      );
    }
    else {
      setPosts([]);
      props.handleDataListChange("empty");
    }
    //console.log(response.data);
    // console.log(response.data.data[0].contentId); // omg I finally got some data
  };

  return (
    <div>
    </div>
  )
}

export default FetchData;
