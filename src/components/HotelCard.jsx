import { Link, useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider.jsx"; 

const roomIcons = {
  Single: "👤",
  Double: "👥",
  Couple: "💑",
  Family: "👨‍👩‍👧‍👦",
};

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    navigate("/booking");
  };

  return (
    <div className="border rounded shadow p-4 mb-6 flex flex-col md:flex-row gap-4">
      {/* Image Slider */}
      <div className="w-full md:w-1/3">
        <ImageSlider images={hotel.images} />
      </div>

      {/* Hotel Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold">{hotel.name}</h3>
          <p className="text-gray-400 text-sm">{hotel.location}</p>
          <p className="mt-1">⭐ {hotel.rating} ({hotel.reviews} reviews)</p>

          {/* Room Types */}
          <div className="flex flex-wrap gap-2 mt-2">
            {hotel.roomTypes?.map((room, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 text-sm rounded-full font-medium flex items-center gap-1 ${
                  room.ac ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
                }`}
              >
                {roomIcons[room.type] || "🏨"} {room.type} {room.ac ? "AC" : "Non-AC"}
              </span>
            ))}
          </div>

          {/* Price */}
          <p className="mt-2 font-semibold">
            ₹{hotel.price}{" "}
            <span className="line-through text-gray-400">{hotel.oldPrice}</span>{" "}
            <span className="text-green-500">({hotel.discount}% OFF)</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2 flex-wrap">
          <Link
            to={`/details/${hotel.id}`}
            state={{ hotel }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center"
          >
            View Details
          </Link>
          <button
            onClick={handleBook}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Book
          </button>
          <a
            href="tel:+919098987675"
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-center"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
