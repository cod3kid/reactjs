import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './Components/SideBar'
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
