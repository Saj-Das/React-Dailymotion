import React from "react";
import VideoCardLayout from "./VideoCardLayout.js";
import SearchBar from "./SearchBar.js";

class VideoDashboard extends React.Component {
  constructor() {
    super();
    this.state = { searchText: null };
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }
  
  render() {
      return (
        <div class="row" style={{ padding: 20 + "px" }}>
          <div class="col-md-2">
            <SearchBar updateFilter={this.handleFilterUpdate} />
          </div>
          <div class="col-md-10">
            <VideoCardLayout searchText={this.state.searchText} />
          </div>
        </div>
      );
    
  }

  handleFilterUpdate(filterValue) {
    this.setState({
      searchText: filterValue
    });
  }
}
export default VideoDashboard;
