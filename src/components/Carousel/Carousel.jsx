import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.scss";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <img
            src="https://wallpapercave.com/wp/wp8348887.jpg"
            className="embla__slide"
          />
          <img
            src="https://img.freepik.com/premium-photo/detailed-armor-hd-wallpaper-photographic-image_993236-1683.jpg"
            className="embla__slide"
          />
          <img
            src="https://epicpath.org/images/thumb/1/10/Scroll_1.png/500px-Scroll_1.png"
            className="embla__slide"
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
