import mongoose from 'mongoose';

// Define the schema for the Room
const roomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String], // Array of strings for amenities
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the model from the schema
const Room = mongoose.model('Room', roomSchema);

export default Room;

