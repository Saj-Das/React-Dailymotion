import React from "react";

class VideoCardLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      videoList: [{}]
    };
  }

  render() {
    const videos = this.state.videoList.map(item => (
      <div class="card" style={{width: 18+"rem",padding:10+"px"}}>
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

    return <div class="row">{videos}</div>;
  }

  componentDidMount() {
    fetch(
      "https://api.dailymotion.com/videos?fields=thumbnail_url,description,id,title,views_total,duration"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          videoList: data.list
        });
      });
  }
}

export default VideoCardLayout;
