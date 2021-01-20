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
        {item.description}

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
