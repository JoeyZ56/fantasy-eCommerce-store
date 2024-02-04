import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.scss";
import images from "../../assets";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <img src={images.slide2} className="embla__slide" />
          <img src={images.slide3} className="embla__slide" />
          <img src={images.slide4} className="embla__slide" />
          <img src={images.slide1} className="embla__slide" />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
