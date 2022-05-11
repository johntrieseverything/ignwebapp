import React from "react";

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      error: "",
    };
  }

  // ComponentDidMount is used to
  // execute the code               https://ign-apis.herokuapp.com/videos
  componentDidMount() {
    fetch(
      "https://ign-apis.herokuapp.com/videos")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    {items.data && items.data.length > 0 &&
      console.log(items.data[0].contentId);
    }

    if (!DataisLoaded) return (
      <div>
        <h1> Please wait ... </h1>
      </div>
    )
    return (
      <div>
        <h1>First Item: </h1>
      </div>
    );
  }
}

export default App;
