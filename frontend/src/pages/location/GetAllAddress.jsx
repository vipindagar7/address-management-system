import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddress } from '../../redux/address/addressServices'
import { useAlert } from '../../contexts/AlertContext'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { FaHome, FaBuilding, FaUsers } from "react-icons/fa";

import { getAllAddress } from '../../redux/address/addressServices';

const GetAllAddress = ({ refreshAddresses }) => {
    const { theme } = useTheme()
    const { address } = useSelector((state) => state.address)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { showAlert } = useAlert()
    const handleDelete = async (id) => {
        await dispatch(deleteAddress(id, navigate, showAlert))

        dispatch(getAllAddress(navigate, showAlert));
    }
    useEffect(() => {
        dispatch(getAllAddress(navigate, showAlert))
    }, [refreshAddresses])
    return (
        <>
            <div className={`my-3 p-6 rounded-lg shadow-md max-w-3xl mx-auto  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
                {address.length > 0 ? (
                    <ul className="space-y-4">
                        {address.map((addr) => {
                            let Icon;

                            // Determine which icon to display based on the address type
                            if (addr.addressType === 'home') {
                                Icon = FaHome;
                            } else if (addr.addressType === 'office') {
                                Icon = FaBuilding;
                            } else {
                                Icon = FaUsers;
                            }

                            return (
                                <li
                                    key={addr._id}
                                    className={`flex justify-between items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}
                                >
                                    <div>
                                        <Icon size={30} />
                                        <strong className="text-lg font-semibold">{addr.title}</strong>
                                        <p className="text-sm">{addr.address}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleDelete(addr._id)}
                                            className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="text-center text-gray-600">
                        <p className="text-lg font-medium">No addresses found.</p>
                        <p className="text-sm">Add an address to get started.</p>
                    </div>
                )}
            </div>

        </>

    )
}

export default GetAllAddress