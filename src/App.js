import React, {Component} from 'react';
import './App.scss';
import Login from './views/login/index';
import Home from './views/home/index';
import ProviterRouter from './components/proviterRouter/index';

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
            <Route component={Login} exact path="/"></Route>
            <ProviterRouter component={Home} path="/index"></ProviterRouter>
          </Switch>
      </HashRouter>
      </div>
    )
  }
}

export default App;
