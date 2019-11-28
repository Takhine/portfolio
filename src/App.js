import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/projects" exact={true} component={Projects} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
