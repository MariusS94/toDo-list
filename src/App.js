import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
        <footer className="app__footer">
          <Link to="/home">HOME</Link>
          <Link to="/edit">EDIT LIST</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
