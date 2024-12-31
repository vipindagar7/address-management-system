import mongoose, { Schema } from 'mongoose';

const addressSchema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        addressType: {
            type: String,
            enum: ['home', 'office', 'friend'],
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
            trim: true,
        },
        pincode: {
            type: Number,
            required: [true, 'pincode is required'],
            trim: true,
        },
        lat: {
            type: Number,
            min: [-90, 'Latitude must be between -90 and 90'],
            max: [90, 'Latitude must be between -90 and 90'],
        },
        lng: {
            type: Number,
            min: [-180, 'Longitude must be between -180 and 180'],
            max: [180, 'Longitude must be between -180 and 180'],
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

export default mongoose.model('Address', addressSchema);
