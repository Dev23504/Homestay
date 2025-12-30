import { Link } from "react-router-dom";
import { FaCheckCircle, FaHotel } from "react-icons/fa";

const PaymentSuccess = () => {
  const booking = JSON.parse(localStorage.getItem("lastBooking"));

  if (!booking)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">No booking found</p>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">

        {/* Success Icon */}
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />

        <h2 className="text-3xl font-extrabold text-green-600">
          Payment Successful
        </h2>

        <p className="text-gray-500 mt-2">
          Thank you for booking with us 🙏
        </p>

        {/* Divider */}
        <div className="border-t my-5"></div>

        {/* Booking Details */}
        <div className="space-y-2 text-left text-sm">
          <p>
            <span className="font-semibold text-gray-700">Booking ID:</span>{" "}
            <span className="text-gray-600">{booking.bookingId}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaHotel className="text-yellow-500" />
            <span className="font-semibold text-gray-700">
              {booking.hotelName}
            </span>
          </p>

          <p>
            <span className="font-semibold text-gray-700">Total Paid:</span>{" "}
            <span className="text-green-600 font-bold">
              ₹{booking.total}
            </span>
          </p>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="block mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 
          hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl 
          font-semibold transition transform hover:scale-105"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
