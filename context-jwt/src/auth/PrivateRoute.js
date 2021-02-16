import { Redirect, Route } from 'react-router-dom';
import { getJWTToken } from './authentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getJWTToken() ? (
        rest.location.pathname === '/'
          ? <Redirect
            to='/home'
          />
          : <Component {...props} />
      ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
    }
  />
);

export default PrivateRoute;
