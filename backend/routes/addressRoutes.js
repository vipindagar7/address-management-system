import express from 'express';
import { authenticatedMiddleware } from '../middleware/authMiddleware.js';
import {
    createAddressController,
    getAllAddressController,
    deleteAddressController
}
    from '../controllers/addressController.js';


// creating Router instance
const router = express.Router();


// user routes for authentication
router.post('/', authenticatedMiddleware, createAddressController); // create a new address
router.get('/', authenticatedMiddleware, getAllAddressController); // get all addresses
router.delete('/:id', authenticatedMiddleware, deleteAddressController); // delete address




export default router;