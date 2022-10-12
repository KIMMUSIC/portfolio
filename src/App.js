import React from "react";
import './App.css';
import HomePage from './pages/HomePage';
import Project from "./pages/Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/">
        <HomePage Name="HOME" />
        </Route>
        <Route exact path="/profile">
        <HomePage Name="profile" />
        </Route>
        <Route exact path="/projects">
        <Project Name="projects" />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
