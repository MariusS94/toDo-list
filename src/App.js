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
          <div>
            <Link className="home" to="/home">
              HOME
            </Link>
          </div>
          <div>
            <Link className="edit" to="/edit">
              EDIT LIST
            </Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
