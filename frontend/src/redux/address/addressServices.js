import * as api from '../../api/addressApi.js';
import {
    requestStart,
    createAddressSuccess,
    createAddressFail,
    getAllAddressSuccess,
    getAllAddressFail,
    deleteAddressSuccess,
    deleteAddressFail,

} from './addressSlice';

// create a get all address service for the user
export const getAllAddress = (navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.getAllAddressAPI();

        if (response) {
            navigate('/dashboard');
            // showAlert(response.message)
            dispatch(getAllAddressSuccess(response.data));
        }
        else {
            showAlert(response.message)
            dispatch(getAllAddressFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(getAllAddressFail())
    }

};


// create a create new address service for  the user
export const createAddress = (formData, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.createAddressAPI(formData);
        if (response) {
            navigate('/dashboard');
            showAlert(response.message)
            dispatch(createAddressSuccess());
        }
        else {
            showAlert(response.message)
            dispatch(createAddressFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(createAddressFail())
    }

};

// create a delete address service for the user
export const deleteAddress = (id, navigate, showAlert) => async (dispatch) => {
    dispatch(requestStart())
    try {
        const response = await api.deleteAddressAPI({ id });
        if (response.success) {
            navigate('/dashboard')
            showAlert(response.message)
            dispatch(deleteAddressSuccess());
        }
        else {
            showAlert(response.message)
            dispatch(deleteAddressFail())
        }

    } catch (error) {
        showAlert(error.message)
        dispatch(deleteAddressFail())
    }

};