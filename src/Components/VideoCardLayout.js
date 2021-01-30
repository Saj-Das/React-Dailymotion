import React from "react";
import { Link, withRouter } from "react-router-dom";

class VideoCardLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      videoList: [{}]
    };
  }
  load() {
    console.log("VideoDashboard");
    let url;
    if (this.props.searchText == null) {
      url =
        "https://api.dailymotion.com/videos?fields=thumbnail_url,description,id,title,views_total,duration";
    } else {
      url =
        "https://api.dailymotion.com/videos?search=" +
        this.props.searchText +
        "&fields=thumbnail_url,description,id,title,views_total,duration";
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          videoList: data.list
        });
      });
  }
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps) {
    if (this.props.searchText !== prevProps.searchText) {
      this.load();
    }
  }
  nextPath(path) {
    console.log("dasd", this.props.history);
    this.props.history.push(path);
  }

  render() {
    const videos = this.state.videoList.map(item => (
      <div
        class="card"
        onClick={() => this.nextPath("/preview/" + item.id)}
        style={{ width: 18 + "rem", padding: 10 + "px" }}
      >
        <img
          class="card-img-top"
          src={item.thumbnail_url}
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            <br /> <h7>{item.title}</h7>
            <br />
            Views: <h7>{item.views_total}</h7>
            <br />
            Duration: <h7>{item.duration}</h7>
          </p>
        </div>
      </div>
    ));

    return (
      <div class="row">
        {" "}
        <Link to="/preview">Home </Link>
        {videos}
      </div>
    );
  }
}

export default withRouter(VideoCardLayout);
