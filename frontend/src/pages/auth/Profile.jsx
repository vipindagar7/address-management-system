import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from '../../contexts/AlertContext';
import { updateProfile} from '../../redux/auth/authServices';
import { useTheme } from '../../contexts/ThemeContext';

const Profile = () => {
    const { theme } = useTheme()
    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const user = useSelector((state) => state.auth.user);

    const [creds, setCreds] = useState({ name: '', email: '', phone: '' });
    const [profileImage, setProfileImage] = useState(null); // Stores the new image file
    const [imagePreview, setImagePreview] = useState(''); // Stores the image preview URL


    useEffect(() => {
        if (user) {
            setCreds({ name: user.name });
            setImagePreview(user.profileImage || 'https://via.placeholder.com/150');
        }
    }, [user]);

    // Handle input changes for text fields
    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        });
    };

    // Handle profile image file input and display preview
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);

        // Display image preview
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(''); // Reset image preview if no file is selected
        }
    };

    // Handle form submission for updating account
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('creds', JSON.stringify(creds));
        if (profileImage) {
            formData.append('profileImage', profileImage);
        }
        await dispatch(updateProfile(formData, navigate, showAlert));

    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className={`p-8 rounded-lg shadow-lg w-full max-w-lg  ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <h2 className="text-3xl font-semibold mb-8 text-center">Update Profile</h2>
                <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Profile Image Section */}
                    <div className="text-center">
                        <div className="mb-4">
                            <div className="mt-1 flex items-center justify-center">
                                <img
                                    src={imagePreview || 'https://via.placeholder.com/150'}
                                    alt="Profile Preview"
                                    className="rounded-full h-24 w-24 object-cover border"
                                />
                            </div>
                        </div>

                        <input
                            type="file"
                            name="profileImage"
                            id="profileImage"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                        />
                    </div>

                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={creds.name}
                            onChange={handleChange}
                            required
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        />
                    </div>



                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full ${loading ? 'bg-gray-400' : 'bg-indigo-600'} text-white py-3 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            {loading ? 'Updating...' : 'Update Account'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
