import React from 'react';
import Paysage from './old/paysage';
import Home from './old/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// npx json-server --watch data/db.json --port 8000
// npm run start
const App = () => {
  return (
    <Router>
    
<Paysage>
<Home/>
</Paysage>
 
    </Router>
  );
};

export default App;
