"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hero from '../public/hero.jpeg';
import Image from 'next/image';

const images = [
    { src: hero, alt: 'Event 1' },
    { src: hero, alt: 'Event 2' },
    { src: hero, alt: 'Event 3' },
    { src: hero, alt: 'Event 1' },
    { src: hero, alt: 'Event 2' },
    { src: hero, alt: 'Event 3' },
];

export default function ImageCarousel() {
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

            {
                images.map((image, index) => (
                    <div key={index} style={{ width: "100%", height: "50vh", boxSizing: "border-box" }}>
                        <Image src={image.src} alt={image.alt} className="object-cover rounded-xl" />
                    </div>
                ))
            }

        </Carousel>
    );
}
