import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainMenu from './screens/MainMenu';
import JourneyPage from './journey/JourneyPage';
import Course1Page from './journey/courses/Course1Page';
import GamesPage from './games/GamesPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// npx json-server --watch data/db.json --port 8000
// npm run start

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <MainMenu></MainMenu>
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

/*
const App = () => {
  return (
    <Router>
      <div className="App">
        <PaysageGame>
        </PaysageGame>
      </div>
    </Router>
  );
};

*/
export default App;
