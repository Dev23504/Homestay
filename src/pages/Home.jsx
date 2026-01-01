import Rb from "../image/Videos/Rbook.mp4";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-20">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Rb} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center px-4 sm:px-6">
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          Rooms
        </h1>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 max-w-md">
          Experience comfort and luxury at Dev Heritage Stay
        </p>

        <a
          href="tel:+919098987675"
          className="bg-yellow-400 text-black font-semibold 
                     px-5 py-3 sm:px-6 sm:py-3 
                     rounded-full 
                     text-sm sm:text-base
                     hover:bg-yellow-500 transition
                     active:scale-95"
        >
          📞 Call Now
        </a>
      </div>
    </div>
  );
};

export default Home;
