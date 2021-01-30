import React from "react";
import ReactDom from "react-dom";

class VideoPreview extends React.Component {
  constructor() {
    super();
    this.state = { videoInfo: { url: "", title: "" } };
  }
  render() {
    return (
      <div>
        Preview
        <img src={this.state.videoInfo.url} />
        {this.state.videoInfo.title}
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.load(id);
  }
  load(id) {
    var url = "https://api.dailymotion.com/video/" + id + "?fields=url,title";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          videoInfo: data.list
        });
      });
  }
}

export default VideoPreview;
