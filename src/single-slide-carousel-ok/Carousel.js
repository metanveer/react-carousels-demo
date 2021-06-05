import { useState } from "react";
import styles from "./Carousel.module.css";
import useInterval from "../hooks/useInterval";

const Carousel = ({ slides }) => {
  const slideDuration = 4000;

  const [current, setCurrent] = useState(0);
  const [userClicked, setUserClicked] = useState(false);

  const length = slides.length;

  const next = (current + 1) % length;

  useInterval(() => {
    if (!userClicked) {
      setCurrent(next);
    }
  }, slideDuration);

  useInterval(() => {
    if (userClicked) {
      setUserClicked(false);
    }
  }, slideDuration);

  function getSlideStyle(current) {
    return { width: `${length * 100}%`, left: `${current * -100}%` };
  }

  const handleSelectSlide = (index) => {
    setCurrent(index);
    setUserClicked(true);
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

export default Carousel;
