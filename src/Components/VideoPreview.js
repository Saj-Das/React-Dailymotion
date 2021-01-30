import React from "react";
import ReactDom from "react-dom";

class VideoPreview extends React.Component {
  render() {
    return <div>Preview</div>;
  }
  
  componentDidMount() {
   const id=this.props.match.params.id;
   console.log(this.props.match.params.id)
  }

}

export default VideoPreview;
