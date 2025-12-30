import {
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaHotel,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 ">

          
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FaHotel className="text-yellow-400" />
                        Homestay
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed">
                        Experience comfort and luxury at our homestay with premium rooms,
                        modern amenities, and warm hospitality for a memorable stay.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">


                        <a
                            href="https://www.instagram.com/im_.dev._9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400 transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://wa.me/+91 9098987675"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400 transition"
                        >
                            <  FaWhatsapp />
                        </a>



                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Rooms</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                        <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Free Wi-Fi</li>
                        <li>24x7 Room Service</li>
                        <li>Restaurant & Dining</li>
                        <li>Spa & Wellness</li>
                        <li>Airport Pickup</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            Ujjain, Madhya Pradesh, India
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-yellow-400" />
                            +91 90989 87675
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-yellow-400" />
                            devheritagestay@gmail.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Dev Heritage Stay. All Rights Reserved.

            </div>
        </footer>
    );
};

export default Footer;
