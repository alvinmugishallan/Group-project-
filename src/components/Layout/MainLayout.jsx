import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* Footer could go here */}
        </div>
    );
};

export default MainLayout;
