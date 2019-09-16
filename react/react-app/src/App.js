import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import login from './components/login';
import registration from './components/registration';

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
          <Route path="" component={login} />
          <Route path="/register" component={registration}/>
    </Router>
    </div>
  );
}

export default App;
