import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Email from '../Email/Email'




function App(){



return(
  <Router>
    <div>
      <Switch>
        <Email />
      </Switch>
    </div>
  </Router>
);

}

export default App;
