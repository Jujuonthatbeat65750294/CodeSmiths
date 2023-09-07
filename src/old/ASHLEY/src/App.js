import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import JourneyPage from './journey/JourneyPage';
import Course1Page from './journey/courses/Course1Page';
import GamesPage from './games/GamesPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="journey-container">
              <Link to="/journey">
                <div className="image-container">
                  <img src="../img/journey.jpg" alt="Journey" className="image" />
                  <h2>Journey</h2>
                </div>
              </Link> 
            </div>
            <div className="games-container">
              <Link to="/games">
                <div className="image-container">
                  <img src="../img/games.jpg" alt="Games" className="image" />
                  <h2>Games</h2>
                </div>
              </Link>
            </div>
          </div>
        </Route>
        <Route exact path="/journey">
          <JourneyPage />
        </Route>
        <Route exact path="/journey/course1">
          <Course1Page />
        </Route>
        <Route path="/games">
          <GamesPage />
        </Route>
      </Switch>
      </div> 
    </Router>  
  );
}

export default App;

// Group 1 letter sounds s, a, t, i, p, n
