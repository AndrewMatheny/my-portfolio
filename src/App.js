import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
              <Link to="/">Home </Link>
              
              <Link to="/about">About</Link>
              {/* <Link to="/dashboard">Dashboard</Link> */}
  
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/dashboard">
              <Dashboard />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }

  
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <h3>Put about here</h3>
    </div>
  );
}

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

export default App;
