import { useState } from "react";
import styled from "styled-components";

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
  { name: "Item 15" },
  { name: "Item 16" },
];

const MultiCarouselSC = () => {
  const slideDuration = 3000;

  const [current, setCurrent] = useState(0);
  const [userClicked, setUserClicked] = useState(false);

  console.log("current", current);

  const length = items.length;
  const cardWidth = 250;
  const marginLeft = 20;

  console.log("length", length);

  const next = (current + 1) % length;
  const prev = (current - 1 + length) % length;

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

  function handleTransStyle(current, index) {
    const offSet = Math.round(length / 2 + 1);
    const distanceFromLeft =
      ((current + index) % length) * -cardWidth +
      marginLeft +
      offSet * cardWidth;
    if (distanceFromLeft >= offSet * cardWidth + marginLeft)
      return { right: `${distanceFromLeft - marginLeft}px` };
    return {
      left: `${distanceFromLeft}px`,
      transition: "left 1s ease",
    };
  }

  function handlePrev() {
    setUserClicked(true);
    setCurrent(prev);
  }
  function handleNext() {
    setUserClicked(true);
    setCurrent(next);
  }

  return (
    <Container>
      <Button prev onClick={handlePrev}>
        {"<"}
      </Button>
      <Visible>
        {items.map((item, index) => (
          <Card key={index} style={handleTransStyle(current, index)}>
            {item.name}
          </Card>
        ))}
      </Visible>
      <Button next onClick={handleNext}>
        {">"}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: rgba(173, 151, 151, 0.336);
  border: 1px solid black;
  border-radius: 10px;
  z-index: 999;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #ee4054;
  position: absolute;
  top: 40%;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  left: ${(p) => (p.prev ? 0 : "")};
  right: ${(p) => (p.next ? 0 : "")};

  &:hover {
    background-color: darkmagenta;
  }
`;

const Visible = styled.div`
  width: 770px;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  overflow: hidden;
  position: relative;
  z-index: -3;
  background-color: aqua;
`;

const Card = styled.span`
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  width: 230px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 20px 0 0;
  background-color: #ee4054;
  position: absolute;
`;

export default MultiCarouselSC;
