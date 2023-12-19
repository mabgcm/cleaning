import connectMongoDB from "app/lib/db";
import Booking from "app/models/booking";
import { NextResponse } from 'next/server'

export async function PUT(request, { params }) {
    const { id } = params;
    const {
        newCleaningType: cleaningType,
        newName: name,
        newPhone: phone,
        newEmail: email,
        newAdress: adress,
        newCity: city,
        newPostalCode: postalCode,
        newBedrooms: bedrooms,
        newBathrooms: bathrooms,
        newSquareFeetRange: squareFeetRange,
        newCleaningItems: cleaningItems,
        newDate: date,
        newTotalAmount: totalAmount } = await request.json();

    console.log("Received date:", date);

    await connectMongoDB();
    await Booking.findByIdAndUpdate(id, {
        cleaningType,
        name,
        phone,
        email,
        adress,
        city,
        postalCode,
        bedrooms,
        bathrooms,
        squareFeetRange,
        cleaningItems,
        date,
        totalAmount
    });
    return NextResponse.json({ message: "Booking updated" }, { status: 200 });
}
export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const booking = await Booking.findOne({ _id: id });
    return NextResponse.json({ booking }, { status: 200 });
}