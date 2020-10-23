import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './Components/SideBar'
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <About exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
