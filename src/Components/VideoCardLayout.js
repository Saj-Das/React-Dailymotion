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
      <div class="col-md-3" key={item.id}>
        <img src={item.thumbnail_url} style={{ width: 180 + "px" }} />
       <br/> <h7>{item.title}</h7>
       <br/> <h7>{item.views_total}</h7>
       <br/> <h7>{item.duration}</h7>
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
