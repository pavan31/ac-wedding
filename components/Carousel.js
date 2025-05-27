"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import img1 from "../public/images/1.jpeg";
import img2 from "../public/images/2.jpeg";
import img3 from "../public/images/3.jpeg";
import img4 from "../public/images/4.jpeg";
import img5 from "../public/images/5.jpeg";
import img6 from "../public/images/6.jpeg";
import img7 from "../public/images/7.jpeg";
import img8 from "../public/images/8.jpeg";
import img9 from "../public/images/9.jpeg";
import img10 from "../public/images/10.jpeg";
import img11 from "../public/images/11.jpeg";
// import img12 from "../public/images/12.jpeg";
// import img13 from "../public/images/13.jpeg";
// import img14 from "../public/images/14.jpeg";
// import img15 from "../public/images/15.jpeg";
// import img16 from "../public/images/16.jpeg";
// import img17 from "../public/images/17.jpeg";
// import img18 from "../public/images/18.jpeg";
// import img19 from "../public/images/19.jpeg";

const images = [
  {
    src: img1,
    alt: "Image 1",
  },
  {
    src: img2,
    alt: "Image 2",
  },
  {
    src: img3,
    alt: "Image 3",
  },
  {
    src: img4,
    alt: "Image 4",
  },
  {
    src: img5,
    alt: "Image 5",
  },
  {
    src: img6,
    alt: "Image 6",
  },
  {
    src: img7,
    alt: "Image 7",
  },
  {
    src: img8,
    alt: "Image 8",
  },
  {
    src: img9,
    alt: "Image 9",
  },
  {
    src: img10,
    alt: "Image 10",
  },
  {
    src: img11,
    alt: "Image 11",
  },
  // {
  //   src: img13,
  //   alt: "Image 13",
  // },
  // {
  //   src: img14,
  //   alt: "Image 14",
  // },
  // {
  //   src: img15,
  //   alt: "Image 15",
  // },
  // {
  //   src: img16,
  //   alt: "Image 16",
  // },
  // {
  //   src: img17,
  //   alt: "Image 17",
  // },
  // {
  //   src: img18,
  //   alt: "Image 18",
  // },
  // {
  //   src: img19,
  //   alt: "Image 19",
  // },
];

export default function ImageCarousel() {
  function scrambleArray(array) {
    const scrambled = [...array]; // Create a shallow copy to avoid mutating the original array
    for (let i = scrambled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
    }
    return scrambled;
  }
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={1000}
      swipeable={true}
      emulateTouch={true}
    >
      {scrambleArray(images).map((image, index) => (
        <div
          key={index}
          style={{ width: "100%", height: "60vh", boxSizing: "border-box" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="object-contain"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
