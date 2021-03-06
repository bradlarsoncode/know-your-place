import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form'
import Place from './components/Place'
import Pieces from './components/Pieces'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Form} />
        <Route exact path='/place' component={Place} />
        <Route exact path='/pieces' component={Pieces} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
