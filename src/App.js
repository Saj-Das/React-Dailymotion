import React from "react";
import "./style.css";
import VideoCardLayout from "./Components/VideoCardLayout.js";
import SearchBar from "./Components/SearchBar.js";

class App extends React.Component {
   constructor() {
    super();
    this.state = { searchText: null ,videoList:null};
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }
  render() {
    this.loadData();
    return (
      <div class="row" style={{ padding: 20 + "px" }}>
        <div class="col-md-2">
          <SearchBar updateFilter={this.handleFilterUpdate} />
        </div>
        <div class="col-md-10">
          <VideoCardLayout videoList={this.state.videoList}/>
        </div>
      </div>
    );
  }

  loadData() {
    let url;
    if (this.state.searchText == null) {
      url =
        "https://api.dailymotion.com/videos?fields=thumbnail_url,description,id,title,views_total,duration";
    } else {
      url =
        "https://api.dailymotion.com/videos?fields=thumbnail_url,description,id,title,views_total,duration,search="+this.state.searchText;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          videoList: data.list
        });
      });
  }
   handleFilterUpdate(filterValue) {
     this.setState({
      searchText: filterValue
    });
  }

}
export default App;
