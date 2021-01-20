import React from "react";
import "./style.css";
import VideoCardLayout from "./Components/VideoCardLayout.js";
import SearchBar from "./Components/SearchBar.js";
export default function App() {
  return (
    <div class="row" style={{padding: 20+"px"}}>
      <div class="col-md-3">
         <SearchBar />
      </div>
      <div class="col-md-9">
      <VideoCardLayout />
      </div>
    </div>
  );
}
