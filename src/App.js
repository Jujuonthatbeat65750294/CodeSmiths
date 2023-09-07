import React from 'react';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameSection from './GameSection';
// npx json-server --watch data/db.json --port 8000
// npm run start
const App = () => {
  return (
    <Router>
    
    <PaysageGame></PaysageGame>
  
    </Router>
  );
};

export default App;
