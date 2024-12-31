import React, { useState } from 'react'
import { useAlert } from '../../contexts/AlertContext'
import { useDispatch } from 'react-redux';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { createAddress } from '../../redux/address/addressServices';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';


const CreateAddress = ({ onClose, onAddAddress }) => {
    const [address, setAddress] = useState({ title: '', addressType: 'home', address: '', lat: '53.54', lng: '10', pincode: '' })
    const [position, setPosition] = useState({ lat: 53.54, lng: 10 })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { showAlert } = useAlert()
    const { theme } = useTheme()
    const handleChange = (e) => {
        e.preventDefault();
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createAddress(address, navigate, showAlert))
        onAddAddress();
        onClose();
    };
    const handleGetLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setAddress({
                ...address,
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        })
    };
    return (
        <>
            <div className={`p-2 mt-28 rounded-lg ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>

                <div>
                    <div>
                        <APIProvider apiKey='AIzaSyCU6GSTPOury1JIldE1M0OOWUP--Ni4Wec'>
                            <div style={{ height: '400px', width: '100%' }}>
                                <Map zoom={9} center={position} mapId={'6a9f749601193c06'}>
                                    <AdvancedMarker position={position}>
                                        <Pin />
                                    </AdvancedMarker>
                                </Map>
                            </div>

                        </APIProvider>
                        <button
                            onClick={handleGetLocation}
                            className="m-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Get Location
                        </button>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-4">Add New Address</h2>
                <form className="mb-6 space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <select
                            name="addressType"
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}

                            required
                        >
                            <option selected value="home">Home</option>
                            <option value="friend">Friend</option>
                            <option value="office">Office</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Title"
                            name='title'
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
                            onChange={handleChange}
                            required

                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name='address'
                            placeholder="Address"
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
                            onChange={handleChange}

                            required

                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="number"
                            placeholder="Pincode"
                            name='pincode'
                            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
                            onChange={handleChange}

                            required

                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Add Address
                    </button>

                    <button

                        onClick={() => onClose()}
                        className="w-full py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Close
                    </button>
                </form>
            </div >
        </>
    )
}

export default CreateAddress