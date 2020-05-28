import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './views/home';
import News from './views/news';

import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends Component{
  constructor(){
    super();
    this.state = {}
  }
  render(){
    return(
      <div className="App">
        <HashRouter>
          <Switch>
            <Route component={Home} exact path="/"></Route>
            <Route component={News} path="/news"></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
