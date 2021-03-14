import React from "react";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageList: [] };
  }
  async componentDidMount() {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: "flower",
      },
      headers: {
        Authorization: "Client-ID SQYZqPVFoo_S7blGAtCIgFHKWU4W126U6AbPJuLLCGg",
      },
    });
    this.setState({ imageList: response.data.results });
    console.log(this.state.imageList);
  }
  render() {
    return (
      <div className="container mt-4">
        <ImageList images={this.state.imageList} />
      </div>
    );
  }
}

export default App;
