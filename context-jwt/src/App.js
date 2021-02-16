import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import { UserContextProvider } from './contexts/userContext';
import { ThemeContextProvider } from './contexts/themeContext';
import { Row } from 'antd';
import Main from './components/main/Main';
import Login from './components/login/Login';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <UserContextProvider user={user}>
      <ThemeContextProvider>
        <Row
          justify='center'
          align='middle'
          style={{ height: '100vh' }}
        >
          <Router>
            <Switch>
              <Route
                exact
                path='/login'
                render={props => <Login {...props} setUser={setUser} />}
              />
              <PrivateRoute path='/' component={Main} />
            </Switch>
          </Router>
        </Row>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;

