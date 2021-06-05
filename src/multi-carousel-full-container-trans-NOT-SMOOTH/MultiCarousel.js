import { useState } from "react";
import styles from "./MultiCarousel.module.css";

import useInterval from "../hooks/useInterval";

const items = [
  { name: "Item 0" },
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" },
  { name: "Item 5" },
  { name: "Item 6" },
  { name: "Item 7" },
  { name: "Item 8" },
  { name: "Item 9" },
  { name: "Item 10" },
  { name: "Item 11" },
  { name: "Item 12" },
  { name: "Item 13" },
  { name: "Item 14" },
];

const MultiCarousel = () => {
  const slideDuration = 2000;

  const [current, setCurrent] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [prevClicked, setPrevClicked] = useState(false);
  // const [leftValue, setLeftValue] = useState(0);

  const visibleCards = 3;

  const slideItems = [...items];

  const length = slideItems.length - 2;

  const next = (current + 1) % length;

  const prev = (current - 1 + length) % length;

  console.log("current", current);
  console.log("length", length);

  // useInterval(() => {
  //   if (!userClicked) {
  //     setCurrent(next);
  //   }
  // }, slideDuration);

  // useInterval(() => {
  //   if (userClicked) {
  //     setUserClicked(false);
  //   }
  // }, slideDuration);

  const leftStyleOne = (current) => {
    if (current === 0 || current === 12)
      return { left: `${current * -250 - 0}px` };
    return { left: `${current * -250}px`, transition: "left .3s ease" };
  };

  console.log("leftStyleOne", leftStyleOne(current));

  const handleSelectSlide = (index) => {
    setUserClicked(true);
  };

  function handleNext() {
    setPrevClicked(false);
    console.log("next", next);
    // if (current === 14) setCurrent(1);
    setCurrent(next);
  }
  function handlePrev() {
    setPrevClicked(true);
    console.log("prev", prev);
    // if (current === 14) setCurrent(13);
    setCurrent(prev);
  }

  return (
    <div className={styles.carousel}>
      <button
        onClick={handlePrev}
        className={`${styles.carouselBtn} ${styles.btnPrev}`}
      >
        {"<"}
      </button>
      <div className={styles.visibleContainer}>
        <div
          className={styles.itemCardsContainer1}
          style={leftStyleOne(current)}
        >
          {slideItems.map((item, index) => (
            <div key={index} className={styles.itemCard}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className={`${styles.carouselBtn} ${styles.btnNext}`}
      >
        {">"}
      </button>
    </div>
  );
};

export default MultiCarousel;
