import React from 'react';
import Paysage from './old/paysage';
import Login from './login/loginPage';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginBackground from './login/loginBackground';

// npx json-server --watch data/db.json --port 8000
// npm run start
const App = () => {
  return (
    <Router>
    
      <LoginBackground></LoginBackground>
  
    </Router>
  );
};

export default App;
