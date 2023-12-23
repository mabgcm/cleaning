// models/Booking.js
import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema({
    cleaningType: String,
    name: String,
    phone: Number,
    email: String,
    adress: String,
    city: String,
    postalCode: String,
    bedrooms: Number,
    bathrooms: Number,
    squareFeetRange: String,
    cleaningItems: [String],
    date: String,
    totalAmount: Number,
    paid: {
        type: Boolean,
        default: false // You can set a default value if needed
    },
    completed: {
        type: Boolean,
        default: false // You can set a default value if needed
    }
},
    {
        timestamps: true
    });

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
