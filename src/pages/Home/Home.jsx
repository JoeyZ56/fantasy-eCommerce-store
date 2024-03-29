import EmblaCarousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <EmblaCarousel />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
