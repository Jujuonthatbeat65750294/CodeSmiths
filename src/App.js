import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainMenu from './screens/MainMenu';
import JourneyPage from './journey/JourneyPage';
import Course1Page from './journey/courses/Course1Page';
import Game1 from './games/game1/game1';
import GameSelection from './GameSection/GameSelection';
import LoginBackground from './login/loginBackground';


// npx json-server --watch data/db.json --port 8000
// npm run start

function App() {
  return (
    <Router>
      <div className="App">

      <Switch>
        <Route  exact path="/">

        </Route>
        <Route exact path="/">
          <MainMenu></MainMenu>
        </Route>
        <Route exact path="/journey">
          <JourneyPage />
        </Route>
        <Route exact path="/journey/course1">
          <Course1Page />
        </Route>
        <Route exact path="/games/">
          <GameSelection />
        </Route>
        <Route exact path="/games/game1">
          <Game1 />
        </Route>
        <Route exact path="/games/game2">
          <Game1 />
        </Route>
        <Route exact path="/games/game3">
          <Game1 />
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
