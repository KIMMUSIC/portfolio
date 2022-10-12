import React from "react";
import './App.css';
import HomePage from './pages/HomePage';
import Project from "./pages/Project";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/portfolio">
        <HomePage Name="HOME" />
        </Route>
        <Route exact path="/portfolio/profile">
        <HomePage Name="profile" />
        </Route>
        <Route exact path="/portfolio/projects">
        <Project Name="projects" />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
