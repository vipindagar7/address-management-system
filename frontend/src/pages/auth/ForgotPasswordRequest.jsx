import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useAlert } from '../../contexts/AlertContext';
import { forgotPasswordRequest } from '../../redux/auth/authServices';
import { useTheme } from '../../contexts/ThemeContext';

const ForgotPasswordRequest = () => {
    const { theme } = useTheme()
    const [creds, setCreds] = useState({ email: '' });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    const handleChange = (e) => {
        e.preventDefault();
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPasswordRequest(creds.email, navigate, showAlert));
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className={`p-8 rounded-lg shadow-lg w-full max-w-md  ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <h2 className="text-2xl font-bold mb-6 text-center ">Forgot Password</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={creds.email}
                            onChange={handleChange}
                            required
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Request Reset Link
                        </button>
                    </div>
                </form>

                {/* Back to Login */}
                <div>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Remembered your password?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordRequest;
