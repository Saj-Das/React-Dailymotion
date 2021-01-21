import React from "react";

class VideoCardLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    const videos = this.props.videoList.map(item => (
      <div class="card" style={{ width: 18 + "rem", padding: 10 + "px" }}>
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
}

export default VideoCardLayout;
