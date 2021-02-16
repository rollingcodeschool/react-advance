import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import { UserContext } from '../../contexts/userContext';
import { Card, Avatar, Switch } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import './main.css';

const { Meta } = Card;

const Home = () => {
  const { user } = useContext(UserContext);
  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);

  const getCardTitle = () => {
    return (
      <div className='card-header'>
        <p style={{ color: isLightTheme ? light.ui : dark.ui }}>Theme Context</p>
        <div>
          <p style={{ color: isLightTheme ? light.ui : dark.ui }}>{isLightTheme ? 'light' : 'dark'}</p>
          <Switch checked={isLightTheme} onClick={toggleTheme} />
        </div>
      </div>
    );
  };

  return (
    <Card
      title={getCardTitle()}
      style={{
        width: 300,
        backgroundColor: isLightTheme ? light.syntax : dark.syntax
      }}
      bordered={isLightTheme}
      hoverable
      cover={
        <img
          alt="example"
          src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={<p style={{ color: isLightTheme ? light.ui : dark.ui }}>{`Username: ${user.username}`}</p>}
        description={<p style={{ color: isLightTheme ? light.ui : dark.ui }}>{`Email: ${user.email}`}</p>}
      />
    </Card>
  );
};

export default Home;