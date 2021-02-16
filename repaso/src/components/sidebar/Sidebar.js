import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';

const Sidebar = () => {
  return (
    <div className='side-bar'>
      <ul>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/hooks-api'>Hooks</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;