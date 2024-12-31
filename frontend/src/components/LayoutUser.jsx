import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './NavbarUser';
import { useTheme } from '../contexts/ThemeContext';


const LayoutUser = () => {
 
    const { theme } = useTheme()

    return (
        <div className="flex flex-col h-screen">
            {/* Header component */}
            <Header  />

            {/* Main content area */}
            <div className={`flex-1 overflow-y-auto transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutUser;
