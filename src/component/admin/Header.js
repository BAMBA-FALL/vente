import React from 'react';
import { accountService } from '../../_services/account.service';
import { useNavigate } from 'react-router-dom';
import './header.css'
const Header = () => {
   const navigate = useNavigate()
    const logout = ()=>{
        accountService.logout()
        navigate('/')
    }
    return (
        <div className='adminheader'>
         <p>Mon header</p>
         <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Header;