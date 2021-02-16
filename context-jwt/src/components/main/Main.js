import React from 'react';
import Header from './Header';
import Content from './Content';
import './main.css';

const Main = ({ history }) => {
  return (
    <>
      <Header history={history} />
      <Content history={history} />
    </>
  );
};

export default Main;