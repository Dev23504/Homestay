import { useLocation, useParams, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import homestays from "../data/homestays.js";

const HotelDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const hotelFromState = location.state?.hotel;
  const hotelFromList = homestays.find(h => h.id === id);
  const hotel = hotelFromState || hotelFromList;

  if (!hotel) return <p className="p-4">Hotel not found</p>;

  const handleBook = () => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    navigate("/booking");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Carousel */}
      <Carousel>
        {hotel.images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="d-block w-100"
              style={{ height: "350px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Hotel Info */}
      <h2 className="text-2xl font-bold mt-4">{hotel.name}</h2>
      <p className="text-gray-600">{hotel.location}</p>
      <p className="mt-1">⭐ {hotel.rating} ({hotel.reviews} reviews)</p>
      <p className="mt-2 text-xl font-bold">
        ₹{hotel.price}{" "}
        <span className="line-through text-gray-400 ml-2">{hotel.oldPrice}</span>{" "}
        <span className="text-green-600 ml-2">{hotel.discount}% OFF</span>
      </p>

      {/* Room Types */}
      <div className="mt-4 flex flex-wrap gap-2">
        {hotel.roomTypes.map((room, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              room.ac ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {room.type} {room.ac ? "AC" : ""}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <button
          onClick={handleBook}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
        >
          Book Now
        </button>
        <a
          href="tel:+919098987675"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Call Now
        </a>
      </div>
    </div>
  );
};

export default HotelDetails;
