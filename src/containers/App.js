import React from "react";
import Index from "../components/Index/indexPage";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
