import React from "react";
import "./style.css";
import VideoCardLayout from "./Components/VideoCardLayout.js";
import SearchBar from "./Components/SearchBar.js";
export default function App() {
  return (
    <div class="row">
      <div class="col-md-6">
        <VideoCardLayout />
      </div>
      <div class="col-md-6">
        <SearchBar />
      </div>
    </div>
  );
}
