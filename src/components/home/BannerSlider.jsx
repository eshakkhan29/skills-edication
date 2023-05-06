import Image from "next/image";
import React, { useEffect, useState } from "react";

const BannerSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/hero.png", "/images/hero2.png", "/images/hero3.png"];

  const handleClick = (index) => {
    setCurrentImage(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <>
      <div className="w-[435px] h-[492px]">
        <div className="w-full h-full relative">
          {images.map((src, index) => (
            <Image
              key={src}
              className={`object-cover transition-opacity duration-500 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
              priority
              src={src}
              fill
              alt={`banner-image-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="pt-[33px] flex gap-x-[12px] items-center justify-center">
        {images.map((src, index) => (
          <div
            key={src}
            className={`rounded-full cursor-pointer ${
              currentImage === index
                ? "bg-[#F66962] w-[10px] h-[10px]"
                : "bg-[#DEDEDE] w-[8.5px] h-[8.5px]"
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default BannerSlider;
