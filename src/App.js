import React from 'react';
import './App.css';
import Nav from './Nav';
import Approved from './Approved';
import Home from './Home';
import Blocks from './Blocks';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Route path="/" exact component={Home} />
          <Route path="/approved" exact component={Approved} />
          <Route path="/pending"/>
          <Route path="/cancel"/> 
          <Route path="/blocks" component={Blocks}></Route>       
      </div>
    </Router>
  );
}

export default App;
