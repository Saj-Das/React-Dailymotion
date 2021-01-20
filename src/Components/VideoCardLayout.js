import React from 'react'

class VideoCardLayout extends React.Component{

  constructor() {
        super()
        this.state = {
            videoList: [{}]
        }
    }

    render()
    {
      return <div>VideoCard</div>
    }

    componentDidMount() {
        fetch("https://api.dailymotion.com/videos?fields=thumbnail_url,description,id,title,views_total,duration")
            .then(response => response.json())
            .then(data => {
              console.log(data.list);
                this.setState({
                    videoList: data
                })
            })
    }
  }

  export default VideoCardLayout;