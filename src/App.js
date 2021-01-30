import React from "react";
import "./style.css";
import VideoDashboard from "./Components/VideoDashboard.js";
import VideoPreview from "./Components/VideoDashboard.js";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
     <Router>
      <div>
        <Switch>
          <Route exact path="/" component={VideoDashboard} />
          <Route exact path="/preview" component={VideoPreview}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
