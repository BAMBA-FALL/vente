import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/public/Header'
import Footer from '../../component/public/Footer'
const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
     
        </div>
    );
};

export default Layout;