import React , {Component} from 'react';

import ProviterRouter from '../proviterRouter/index';
import { Switch } from 'react-router-dom';
import User from '../../views/user/index';
import Add from '../../views/user/add';


class Content extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <Switch>    
                <ProviterRouter exact  component={User} path="/index/user/list"></ProviterRouter>
                <ProviterRouter exact component={Add} path="/index/user/add"></ProviterRouter>
            </Switch>
        )
    }
}

export default Content;