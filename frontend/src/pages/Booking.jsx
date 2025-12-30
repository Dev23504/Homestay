import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { QRCodeCanvas } from "qrcode.react";
import { FaCalendarAlt, FaHotel, FaUpload } from "react-icons/fa";

const Booking = () => {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000));
  const [screenshot, setScreenshot] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("selectedHotel");
    if (data) setHotel(JSON.parse(data));
  }, []);

  if (!hotel)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Select a hotel first</p>
      </div>
    );

  const nights = Math.max(
    1,
    Math.ceil((checkOut - checkIn) / 86400000)
  );
  const total = nights * hotel.price;

  const upiId = "9098987675@ybl";
  const upiUrl = `upi://pay?pa=${upiId}&pn=Dev Heritage Stay&am=${total}&cu=INR`;

  const submitProof = () => {
    if (!screenshot) {
      alert("Please upload payment screenshot");
      return;
    }

    const bookingId = "BK" + Date.now();

    const bookingDetails = {
      bookingId,
      hotelName: hotel.name,
      total,
      checkIn: checkIn.toDateString(),
      checkOut: checkOut.toDateString(),
      status: "Payment Proof Submitted",
    };

    localStorage.setItem("lastBooking", JSON.stringify(bookingDetails));
    setSubmitted(true);

    setTimeout(() => {
      navigate("/payment-success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4 pt-20">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6">

        {/* Header */}
        <div className="text-center mb-6">
          <FaHotel className="text-4xl text-indigo-600 mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold">{hotel.name}</h2>
          <p className="text-gray-500 text-sm">{hotel.location}</p>
        </div>

        {/* Date Picker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold flex items-center gap-2 mb-1">
              <FaCalendarAlt /> Check In
            </label>
            <DatePicker
              selected={checkIn}
              onChange={setCheckIn}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="font-semibold flex items-center gap-2 mb-1">
              <FaCalendarAlt /> Check Out
            </label>
            <DatePicker
              selected={checkOut}
              onChange={setCheckOut}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Price Info */}
        <div className="mt-4 bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-gray-600">Nights: {nights}</p>
          <p className="text-xl font-bold text-green-600">
            Total: ₹{total}
          </p>
        </div>

        {/* UPI Section */}
        <div className="mt-6 border-t pt-5 text-center">
          <h3 className="font-bold mb-2">Pay via UPI</h3>

          <div className="flex justify-center">
            <QRCodeCanvas value={upiUrl} size={200} />
          </div>

          <p className="text-sm mt-2 text-gray-500">
            Scan using GPay / PhonePe / Paytm
          </p>

          <a href={upiUrl}>
            <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
              Open UPI App
            </button>
          </a>
        </div>

        {/* Upload Section */}
        <div className="mt-6">
          <label className="font-semibold flex items-center gap-2 mb-2">
            <FaUpload /> Upload Payment Screenshot
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setScreenshot(e.target.files[0])}
            className="w-full border rounded-lg p-2"
          />

          <button
            onClick={submitProof}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Submit Payment Proof
          </button>

          <p className="text-xs text-gray-400 mt-2 text-center">
            *Payment will be verified manually
          </p>
        </div>

        {/* Success */}
        {submitted && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            ✅ Payment proof submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Booking;
