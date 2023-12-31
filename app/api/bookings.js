// app/api/route.js

import dbConnect from '../../lib/db';
import Booking from '../../models/Booking';

// Define the functions
async function getHandler(req, res) {
    // Handle GET request
    await dbConnect();
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
}

async function postHandler(req, res) {
    // Handle POST request
    await dbConnect();
    try {
        const newBooking = await Booking.create(req.body);
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: 'Error creating booking' });
    }
}

// Export the functions
export { getHandler, postHandler };
