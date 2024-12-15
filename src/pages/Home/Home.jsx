import EmblaCarousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
// import Gallery from "../../components/Gallery/Gallery";
// import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page-main-contianer">
      <div>
        <Categories />
      </div>
      <div>
        <EmblaCarousel />
      </div>

      {/* <div>
        <Gallery />
      </div> */}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
