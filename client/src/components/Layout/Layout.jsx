import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../navbar/main_navbar';
import PageTransition from '../PageTransition/PageTransition';

const Layout = () => {
    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 99999 }}>
                <MainNavbar />
            </div>
            <PageTransition>
                <Outlet />
            </PageTransition>
        </>
    );
};

export default Layout;
