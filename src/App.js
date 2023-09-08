import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login/loginPage';
import MainMenu from './screens/MainMenu';
import JourneyPage from './journey/JourneyPage';
import Course1Page from './journey/courses/Course1Page';
import Game1 from './games/game1/game1';
import Phase_Guess_First_Letter from './journey/Phase_Guess_First_Letter';
import GameSelection from './GameSection/GameSelection';
import LoginBackground from './login/loginBackground';



// npx json-server --watch data/db.json --port 8000
// npm run start

function App() {
  useEffect(() => {
    // Create and configure the audio element for background music
    const audio = new Audio('../assets/audio/bg_music/BG_2-Underwater Mermaid Castle.mp3');
    audio.loop = true;

    // Play the audio when the user interacts with the document
    document.addEventListener('click', () => {
      audio.volume = 0.2;
      audio.play();
    });

    // Clean up function to pause the audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, []);
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/main-menu">
          <MainMenu></MainMenu>
        </Route>
        <Route exact path="/main-menu/journey">
          <JourneyPage />
        </Route>
        <Route exact path="/main-menu/journey/course1">
          <Course1Page />
        </Route>
        <Route exact path="/main-menu/games/">
          <GameSelection />
        </Route>
        <Route exact path="/main-menu/games/game1">
          <Phase_Guess_First_Letter />
        </Route>
        <Route exact path="/main-menu/games/game2">
          <Game1 />
        </Route>
        <Route exact path="/main-menu/games/game3">
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
