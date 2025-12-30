import homestays from "../data/homestays.js";
import HotelCard from "./HotelCard.jsx"; 


const Rooms = () => {
  return (
    <div className="container mx-auto my-6 mt-20 bg-bg-purple-200"><br/>
      <h2 className="text-2xl font-bold mb-6 bg-green-200">Hotels Rooms</h2>

      {homestays.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
      
    </div>
  );
};

export default Rooms;
