
import React from "react";

const BookingDetails = () => {
  const data = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!data) return <p className="p-4 text-center">No booking found</p>;

  return (
    <div className="max-w-xl mx-auto p-6 border rounded shadow mt-20 ">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>

      <p><b>Booking ID:</b> {data.bookingId}</p>
      <p><b>Hotel:</b> {data.hotel.name}</p>
      <p><b>Location:</b> {data.hotel.location}</p>
      <p><b>Check-In:</b> {data.checkIn}</p>
      <p><b>Check-Out:</b> {data.checkOut}</p>
      <p><b>Total Paid:</b> ₹{data.total}</p>

      {data.screenshot && (
        <div className="mt-4">
          <p className="font-semibold">Payment Screenshot:</p>
          <img
            src={URL.createObjectURL(new File([], data.screenshot))}
            alt="Payment Screenshot"
            className="w-full max-h-64 object-contain border mt-2 rounded"
          />
        </div>
      )}

      <p className="mt-4 text-green-600 font-bold text-lg">
        Payment Status: SUCCESS
      </p>
    </div>
  );
};

export default BookingDetails;
