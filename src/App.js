import React from "react";
import './App.css';
import HomePage from './pages/HomePage';
import Project from "./pages/Project";
import Archiving from "./pages/Archiving"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/portfolio/">
        <HomePage Name="HOME" />
        </Route>
        <Route exact path="/portfolio/Archiving">
        <Archiving Name="Archiving" />
        </Route>
        <Route exact path="/portfolio/projects">
        <Project Name="projects" />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
