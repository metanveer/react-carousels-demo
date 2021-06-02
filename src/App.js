import styles from "./App.module.css";
import Carousel from "./Carousel/Carousel";
import MultiCarousel from "./MultiCarousel/MultiCarousel";

import { images } from "./order-carousel/order-carousel-images";

function App() {
  return (
    <div className={styles.app}>
      <Carousel slides={images} />
      {/* <MultiCarousel slides={images} /> */}
    </div>
  );
}

export default App;
