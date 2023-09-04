import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import CreateCourse from './course/CreateCourse';
import CourseDetails from './course/CourseDetails';
import Paysage  from './paysage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// npx json-server --watch data/db.json --port 8000
// npm run start
const App = () => {
  return (
    <Router>
       <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/CreateCourse">
              <CreateCourse/>
            </Route>
            <Route path="/Courses/:id">
              <CourseDetails/>
            </Route>
          </Switch>
        </div>
      </div> 

  
    </Router>
  );
};

export default App;
