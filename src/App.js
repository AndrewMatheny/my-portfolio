import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import './App.css';
import About from './components/About'
import Navbar from './components/Navbar'
import TripPlanner from './components/TripPlanner'
import JobSearchTracker from './components/JobSearchTracker'
import DailyDollar from './components/DailyDollar'
import Home from './components/Home'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dailydollar">
              <DailyDollar />
            </Route>
            <Route path="/tripplanner">
              <TripPlanner />
            </Route>
            <Route path="/jobsearchtracker">
              <JobSearchTracker />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  
}

export default App;
