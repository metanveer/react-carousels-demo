import { useState } from "react";
import styles from "./MultiCarousel.module.css";

import useInterval from "../hooks/useInterval";

const MultiCarousel = ({ slides }) => {
  const slideDuration = 5000;

  const [current, setCurrent] = useState(0);
  const [delay, setDelay] = useState(slideDuration);

  const length = slides.length;

  const next = (current + 1) % length;

  useInterval(() => {
    setCurrent(next);
  }, [delay]);

  function getSlideStyle(current) {
    return { width: `${length * 100}%`, left: `${current * -100}%` };
  }

  const handleSelectSlide = (index) => {
    setCurrent(index);
    setDelay(slideDuration);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselControl}>
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => handleSelectSlide(index)}
            className={current === index ? styles.activeDot : styles.dot}
          ></div>
        ))}
      </div>
      <div className={styles.allSlides} style={getSlideStyle(current)}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <img src={slide.image} alt={slide.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiCarousel;
