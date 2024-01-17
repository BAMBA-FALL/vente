import React from 'react';
import './sideMenu.css';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className='side-menu'>
      <ul>
        <li> <Link to='/'>Mon site</Link> </li>
        <li>&nbsp;</li>
        <li> <Link to='/admin/dashboard'>Dashboard</Link> </li>
        <li>
         User
          <ul className="dropdown-menu">
            <li> <Link to="/admin/user/index" >Liste</Link></li>
            <li> <Link to='/admin/user/add' >Ajouter</Link></li>
          </ul>
        </li>


        <li>
          Cocktail
          <ul className="dropdown-menu">
            <li> <Link to="/admin/cocktail/index" >Liste</Link></li>
            <li> <Link to='/admin/cocktail/add' >Ajouter</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
