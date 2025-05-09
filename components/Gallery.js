import React from "react";
import Carousel from "./Carousel";

const Gallery = () => {
  return (
    <section
      className=" flex flex-col items-center"
      style={{ marginBottom: "100px" }}
    >
      <p
        className="text-8xl sm:text-8xl font-vibes text-center"
        style={{ marginBottom: "100px" }}
      >
        Gallery
      </p>
      <div
        className="w-full sm:w-[50%]"
        style={{
          boxSizing: "border-box",
        }}
      >
        <Carousel />
      </div>
    </section>
  );
};

export default Gallery;
