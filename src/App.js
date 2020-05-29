import React, {Component} from 'react';
import './App.scss';
import Login from './views/login/index';

import { HashRouter, Switch, Route  } from 'react-router-dom';

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
          </Switch>
      </HashRouter>
      </div>
    )
  }
}

export default App;
