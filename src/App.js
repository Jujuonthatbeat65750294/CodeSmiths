import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import CreateCourse from './course/CreateCourse';
import CourseDetails from './course/CourseDetails';
import Paysage  from './paysage';
import PaysageGame from './paysageGame';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
