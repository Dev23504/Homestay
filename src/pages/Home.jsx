
import Rb from "../image/Videos/Rbook.mp4"

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-20">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Rb} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Rooms
        </h1>

        <a
          href="tel:+91 9098987675"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
        >
          Call Now
        </a>
        
      </div>
      



    </div>



  );
};

export default Home;
