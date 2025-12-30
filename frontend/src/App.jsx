import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Booking from "./pages/Booking.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import BookingDetails from "./pages/BookingDetails.jsx";
import HotelDetails from "./pages/HotelDetails.jsx";
import Details from "./pages/ Details.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./components/Contact.jsx";
import Rooms from "./components/Rooms.jsx";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes> <Footer />
     
    </BrowserRouter>
  );
}

export default App;
