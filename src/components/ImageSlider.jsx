import Carousel from "react-bootstrap/Carousel";

const ImageSlider = ({ images }) => {
  return (
    <Carousel interval={2500} className="rounded">
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            src={img}
            className="d-block w-full h-60 md:h-55 object-cover rounded"
            alt="hotel"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
