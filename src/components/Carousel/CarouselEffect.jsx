import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "./data";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel>
        {data.map((image) => (
          <img src={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
