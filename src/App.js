import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

// Pages
import Home from './pages/Home';
import Projects from './pages/MyProjects';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" exact={true} component={Projects} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
