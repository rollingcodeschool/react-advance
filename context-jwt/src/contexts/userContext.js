import React, { createContext } from 'react';
import { getUser } from '../auth/authentication';

const UserContext = createContext();

const UserContextProvider = props => {
  return (
    <UserContext.Provider value={{ user: Object.keys(props.user).length ? props.user : getUser() }}>
      {props.children}
    </UserContext.Provider>
  );
};

export {
  UserContextProvider,
  UserContext
};