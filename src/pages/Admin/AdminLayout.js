import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/admin/Header';
import SideMenu from '../../component/admin/SideMenu'
import Footer from '../../component/admin/Footer';
const AdminLayout = () => {
    return (
        <div className='adminLayout'>
            <Header/>
            <div id='admin'>
                <SideMenu/>
            <div className='admin_body'><Outlet/></div>
            </div>
            <Footer/>
        </div>
    );
};

export default AdminLayout;