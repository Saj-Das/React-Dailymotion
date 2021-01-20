import React from "react";

class VideoCardLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      videoList: [{}]
    };
  }

  render() {
    console.log("render");
    console.log(this.state.videoList);
    const videos = this.state.videoList.map(item => (
      <div key={item.id}>
        {item.description}
      <hr/>
      </div>
      
    ));

    return videos;
  }

  componentDidMount() {
    fetch(
      "https://api.dailymotion.com/videos?fields=thumbnail_url,description,id,title,views_total,duration"
    )
      .then(response => response.json())
      .then(data => {
        console.log("comp");
        this.setState({
          videoList: data.list
        });
      });
  }
}

export default VideoCardLayout;
