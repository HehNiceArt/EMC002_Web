import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['New Booking', 'Check In', 'Check Out'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;