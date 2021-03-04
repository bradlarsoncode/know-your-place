import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form'
import Place from './components/Place'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Form} />
        <Route exact path='/place' component={Place} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
