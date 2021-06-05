import styles from "./App.module.css";
import Carousel from "./single-slide-carousel-ok/Carousel";
import { images } from "./single-carousel-images/order-carousel-images";
import MultiCarouselSC from "./multi-carousel-styled-component-ok/MultiCarouselSC";

function App() {
  return (
    <div className={styles.app}>
      <Carousel slides={images} />
      <MultiCarouselSC />
    </div>
  );
}

export default App;
