import { useParams, useNavigate } from "react-router-dom";
import homestays from "../data/homestays.js";
import Carousel from "react-bootstrap/Carousel";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const stay = homestays.find(item => item.id === id);

  if (!stay) return <h2 className="text-center mt-10 text-xl">Homestay not found</h2>;

  const handleBook = () => {
    localStorage.setItem("selectedHotel", JSON.stringify(stay));
    navigate("/booking");
  };

  return (
    <div className="max-w-4xl mx-auto p-4  mt-20 bg-purple-200">
      {/* Carousel for images */}
      <Carousel>
        {stay.images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`${stay.name} ${index + 1}`}
              className="d-block w-100 rounded"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <h1 className="text-3xl font-bold mt-4">{stay.name}</h1>
      <p className="text-gray-600">{stay.location}</p>
      <p className="mt-2">⭐ {stay.rating} ({stay.reviews} reviews)</p>
      <p className="mt-2 text-xl font-bold">
        ₹{stay.price} <span className="line-through text-gray-400 ml-2">{stay.oldPrice}</span>{" "}
        <span className="text-green-600 ml-2">({stay.discount}% OFF)</span>
      </p>

      <button
        onClick={handleBook}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default Details;
