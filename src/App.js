import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
              <Link to="/">Home </Link>
              
              <Link to="/about">About</Link>
              <Link to="/dailydollar">DailyDollar</Link>
              <Link to="/tripplanner">Trip Planner</Link>
              <Link to="/jobsearchtracker">Job Search Tracker</Link>
              
  
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
