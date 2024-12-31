import axios from 'axios';
import { apiError, apiResponse } from './utils';
import apiClient from './axios';


export const getAllAddressAPI = async () => {

    try {
        // creating a post request
        const response = await apiClient.get('/api/address/', {}, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError
        return apiError(error);
    }
};

export const createAddressAPI = async (formData) => {
    console.log(formData)
    try {
        // creating a post request
        const response = await apiClient.post('/api/address/', formData, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError 
        return apiError(error);
    }
};

export const deleteAddressAPI = async ({id}) => {

    try {
        // creating a post request
        const response = await apiClient.delete(`/api/address/${id}`, {}, { withCredentials: true });
        // Process the response using apiResponse
        return apiResponse(response);
    } catch (error) {
        // Handle the error using apiError 
        return apiError(error);
    }
};