import { useEffect, useState } from "react";
import { chunkArray } from "../utils/helper.js";

const HomestaySlider = ({ data, title }) => {
  const [current, setCurrent] = useState(0);
  const [perSlide, setPerSlide] = useState(3);

  // 📱 responsive
  useEffect(() => {
    const resize = () => {
      setPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const slides = chunkArray(data, perSlide);

  // 🔁 auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="mb-5">
      <h3 className="text-center mb-3">{title}</h3>

      <div className="row g-3">
        {slides[current].map((item, index) => (
          <div className={`col-${12 / perSlide}`} key={index}>
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6>{item.name}</h6>
                <p className="text-muted">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomestaySlider;
