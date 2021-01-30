import React from "react";
import ReactDom from "react-dom";

class VideoPreview extends React.Component {
  constructor() {
    super();
    this.state = { url: "", title: "" };
  }
  render() {
    return (
      <div>
        <img src={this.state.url} />
        {this.state.title}
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.load(id);
  }
  load(id) {
    var url = "https://api.dailymotion.com/video/" + id + "?fields=title";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          url: data.url,
          title: data.title
        });
      });
  }
}

export default VideoPreview;
