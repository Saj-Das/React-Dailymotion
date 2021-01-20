import React from 'react'

class VideoCardLayout extends React.Component{

  constructor() {
        super()
        this.state = {
            character: {}
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
                this.setState({
                    character: data
                })
            })
    }
  }

  export default VideoCardLayout;