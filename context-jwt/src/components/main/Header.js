import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { logout } from '../../auth/authentication';
import { Tooltip, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './main.css';

const Header = ({ history }) => {
  const { user } = useContext(UserContext);

  return (
    <div className='nav-header'>
      <img
        src='https://campus.rollingcodeschool.com/pluginfile.php/1/core_admin/logo/0x150/1602632262/logo2.png'
        alt='logo-rolling'
      />
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li>{user.username}</li>
        <Tooltip title='Logout' placement='bottom'>
          <Button onClick={() => logout(history)} type='primary'>
            <LogoutOutlined />
          </Button>
        </Tooltip>
      </ul>
    </div>
  );
};

export default Header;