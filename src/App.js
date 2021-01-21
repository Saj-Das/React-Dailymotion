import React from "react";
import "./style.css";
import VideoCardLayout from "./Components/VideoCardLayout.js";
import SearchBar from "./Components/SearchBar.js";

class App extends React.Component {
   constructor() {
    super();
    this.state = { searchText: null };
  }
  render() {
    return (
      <div class="row" style={{ padding: 20 + "px" }}>
        <div class="col-md-2">
          <SearchBar updateFilter={this.handleFilterUpdate} />
        </div>
        <div class="col-md-10">
          <VideoCardLayout searchText={this.state.searchText}/>
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
export default App;
