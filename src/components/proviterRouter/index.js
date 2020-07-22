import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import {getToken} from '../../utils/session';
import {getCookie} from '../../utils/cookie';

const proviterRouter = ({ component: Component, ...rest }) => {
    return (
        
        <Route {...rest} render={routeProps => (
              getCookie() ? <Component {...routeProps} /> : <Redirect to="/" />
          )}
        />
      );
}

export default proviterRouter;


    