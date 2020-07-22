import React , {Component} from 'react';

import ProviterRouter from '../proviterRouter/index';
import { Switch } from 'react-router-dom';
// import User from '../../views/user/list';
// import Add from '../../views/user/add';


const file = require.context('../../views',true,/\.js$/);  // 第一个参数：目录，第二参数：是否查找子级目录，第三参数：指定查找到文件
const components = [];

file.keys().map(item=>{
    if(item.includes('/home/') || item.includes('/login/')){
        return false;
    }
    const items= item.split('.');
    const path   = `/index${items[1]}`
    const jsonObj = {};
    jsonObj.path = path;
    const component  = file(item).default ;
    jsonObj.component = component;
    components.push(jsonObj);
})
console.log(components);



class Content extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <Switch>
                    {
                        components.map(item=>{
                            return   <ProviterRouter exact key={item.path} component={item.component} path={item.path}></ProviterRouter>
                        })
                    }
                {/* <ProviterRouter exact  component={User} path="/index/user/list"></ProviterRouter>
                <ProviterRouter exact component={Add} path="/index/user/add"></ProviterRouter> */}
            </Switch>
        )
    }
}

export default Content;