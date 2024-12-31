import addressModel from "../models/addressModel.js"
import { userModel } from "../models/userModel.js"

// @desc create a new address
// @route POST /api/address/
// @access private
export const createAddressController = async (req, res) => {
    const { title, address, lat, lng, pincode , addressType } = req.body
    console.log(req.body)
    const { id } = req.user
    try {
        const user = await userModel.findById(id)
        await addressModel.create({
            user,
            title,
            address,
            addressType,
            pincode,
            lat,
            lng
        })

        return res.status(200).json({
            success: true,
            error: null,
            message: 'Create address successfully',
            data: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error.name,
            data: null
        })
    }
}

// @desc get all addresses
// @route POST /api/address/
// @access private
export const getAllAddressController = async (req, res) => {
    const { id } = req.user
    try {
        const addresses = await addressModel.find({ user: id })

        return res.status(200).json({
            success: true,
            error: null,
            message: 'Fetched all addresses',
            data: addresses
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error.name,
            data: null
        })
    }
}

// @desc delete address
// @route POST /api/address/
// @access private
export const deleteAddressController = async (req, res) => {
    const id = req.params.id
    
    try {
        await addressModel.findByIdAndDelete(id)

        return res.status(200).json({
            success: true,
            error: null,
            message: 'Address deleted succesfully',
            data: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error.name,
            data: null
        })
    }
}