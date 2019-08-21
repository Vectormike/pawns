import React from "react";
import Index from "../components/Index/indexPage";
import Gallery from "./Gallery/gallery";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
