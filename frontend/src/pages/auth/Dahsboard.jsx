import React from 'react';

import { useSelector } from 'react-redux';
import { useTheme } from '../../contexts/ThemeContext';


const Dahsboard = () => {
    const { theme } = useTheme()
    const user = useSelector((state) => state.auth.user);

    return (
        <div className={`flex-1 p-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
            <h2 className="lg:text-2xl font-bold mb-4 text-center text-blue-600 md:text-sm">Welcome back, {user.name}!</h2>




        </div>
    );
};

export default Dahsboard;
