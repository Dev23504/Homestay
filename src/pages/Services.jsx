import React from "react";
import {
  FaCoffee,
  FaParking,
  FaHeart,
  FaTicketAlt,
  FaGlassCheers,
  FaSpa,
  FaShuttleVan,
  FaConciergeBell,
  FaGift,
} from "react-icons/fa";

const paidServices = [
  { name: "Breakfast", icon: <FaCoffee /> },
  { name: "Parking", icon: <FaParking /> },
  { name: "Love Package / Love Box", icon: <FaHeart /> },
  { name: "Tickets / Passes", icon: <FaTicketAlt /> },
  { name: "Bottle of Champagne", icon: <FaGlassCheers /> },
  { name: "Flowers", icon: <FaGift /> },
  { name: "Restaurant", icon: <FaConciergeBell /> },
  { name: "Private View Room", icon: <FaConciergeBell /> },
  { name: "Spa / Massage", icon: <FaSpa /> },
  { name: "Shuttle Service", icon: <FaShuttleVan /> },
];

const freeServices = [
  { name: "International Adapter", icon: <FaGift /> },
  { name: "City Map", icon: <FaTicketAlt /> },
  { name: "Bottle of Water", icon: <FaCoffee /> },
  { name: "Ironing Facilities", icon: <FaGift /> },
  { name: "Extra Pillows", icon: <FaGift /> },
  { name: "Luggage Service", icon: <FaGift /> },
  { name: "Beauty Kit", icon: <FaGift /> },
  { name: "Welcome Tray", icon: <FaGift /> },
  { name: "Baby Kit", icon: <FaGift /> },
  { name: "Concierge Service", icon: <FaConciergeBell /> },
];

const Services = () => {
  return (
    <div className="container mx-auto p-6 mt-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>

      {/* Paid Services */}
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Top 10 Chargeable Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {paidServices.map((service, index) => (
          <div
            key={index}
            className="border rounded p-5 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-4xl text-red-500 mb-2 flex justify-center">
              {service.icon}
            </div>
            <span className="text-lg font-bold text-red-600">
              {index + 1}
            </span>
            <p className="mt-1 font-medium">{service.name}</p>
          </div>
        ))}
      </div>

      {/* Free Services */}
      <h3 className="text-2xl font-semibold mb-4 text-green-600">
        Top 10 Free Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {freeServices.map((service, index) => (
          <div
            key={index}
            className="border rounded p-5 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-4xl text-green-500 mb-2 flex justify-center">
              {service.icon}
            </div>
            <span className="text-lg font-bold text-green-600">
              {index + 1}
            </span>
            <p className="mt-1 font-medium">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
