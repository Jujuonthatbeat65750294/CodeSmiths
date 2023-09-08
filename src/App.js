import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AudioManager from './utils/AudioManager';
import MainMenu from './screens/MainMenu';
import JourneyPage from './journey/JourneyPage';
import Course1Page from './journey/courses/Course1Page';
import Introduction from './journey/courses/phases/introduction';
import SoundOfSAndAPage from './journey/courses/phases/sound_of_s_and_a';
import Guess_First_Letter from './journey/courses/phases/guess_first_letter';
import Phase_Guess_First_Letter from './journey/Phase_Guess_First_Letter';
import GameSelection from './GameSection/GameSelection';
import LoginBackground from './login/loginBackground';
import PaysageGame from './old/paysageGame';
import MathAdditionGame from './games/MathAdditionGame';

// npx json-server --watch data/db.json --port 8000
// npm run start

function App() {
  return (
    <Router>
      <div className="App">
      {/* <AudioManager audioFile="../assets/audio/bg_music/BG_2-Underwater Mermaid Castle.mp3" volume={0.2} /> */}
      <Switch>
        <Route exact path="/">
          <LoginBackground></LoginBackground>
        </Route>
        <Route exact path="/main-menu">
          <MainMenu>
          </MainMenu>
        </Route>
        <Route exact path="/main-menu/journey">
          <JourneyPage />
        </Route>
        <Route exact path="/main-menu/journey/course1">
          <Course1Page />
        </Route>
        <Route exact path="/main-menu/journey/course1/introduction">
          <Introduction />
        </Route>
        <Route exact path="/main-menu/journey/course1/sound-of-s-and-a">
          <SoundOfSAndAPage />
        </Route>
        <Route exact path="/main-menu/journey/course1/practice_s_a">
          <Guess_First_Letter groupLetters={['S', 'A']} />
        </Route>
        <Route exact path="/main-menu/journey/course1/practice_t_i">
          <Guess_First_Letter groupLetters={['T', 'I']} />
        </Route>
        <Route exact path="/main-menu/journey/course1/review_s_a_t_i">
          <Guess_First_Letter groupLetters={['S', 'A', 'T', 'I']} />
        </Route>
        <Route exact path="/main-menu/games/">
          <GameSelection />
        </Route>
        <Route exact path="/main-menu/games/game1">
          <Phase_Guess_First_Letter />
        </Route>
        <Route exact path="/main-menu/games/game2">
    <PaysageGame/>
        </Route>
        <Route exact path="/main-menu/games/game3">
          <MathAdditionGame/>
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
