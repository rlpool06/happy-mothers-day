'use client'
import Image from "next/image";
import eliana1 from '../public/IMG_0254.jpg';
import eliana2 from '../public/IMG_9510.jpg';
import eliana3 from '../public/IMG_9551.jpg';
import eliana4 from '../public/IMG_9861.jpg';
import eliana5 from '../public/IMG_9927.jpg';
import judah1 from '../public/B89A6664.jpg';
import judah2 from '../public/B89A6876.jpg';
import judah3 from '../public/B89A6890.jpg';
import judah4 from '../public/B89A6897.jpg';

// carousel.tsx
import React, { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 })
  ]);

  const images = [
    {image: eliana1},
    {image: eliana2},
    {image: eliana3},
    {image: eliana4},
    {image: eliana5},
    {image: judah1},
    {image: judah2},
    {image: judah3},
    {image: judah4}
  ]

  return (
    <div className="embla mx-auto mt-12 h-80 max-w-lg border" ref={emblaRef}>
      <div className="embla__container h-full">
        {images.map((image, index) => <Image key={index} alt="image" src={image.image} objectFit="contain" />)}
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div className="bg-pink-100 h-screen flex justify-center text-center p-4 md:p-24 items-center flex-col">
      <h1 className="text-2xl font-bold">Happy Mother&apos;s Day!</h1>
      <EmblaCarousel />
    </div>
  );
}
