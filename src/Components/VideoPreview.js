import React from "react";
import ReactDom from "react-dom";

class VideoPreview extends React.Component {
  constructor() {
    super();
    this.state = { url: "", thumbnail_url: "" };
  }
  render() {
    return (
      <div>
        <img src={this.state.thumbnail_url} />
       <br /> {this.state.title}
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.load(id);
  }
  load(id) {
    var url = "https://api.dailymotion.com/video/" + id + "?fields=title,thumbnail_url";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          thumbnail_url: data.thumbnail_url,
          title: data.title
        });
      });
  }
}

export default VideoPreview;
