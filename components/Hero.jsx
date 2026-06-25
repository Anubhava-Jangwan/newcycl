import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <>
      <div className={`mx-auto text-center py-24 sm:py-48`}>
        <h1 className="w-full py-2 font-extrabold text-5xl lg:text-6xl tracking-tight text-center">
          Transform the way you throw
        </h1>
        <div className="textSlider mt-6">
          <Swiper
            direction={"vertical"}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
          >
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Banana peels
            </SwiperSlide>
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Leftover curry
            </SwiperSlide>
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Extra rice
            </SwiperSlide>
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Rotten dough
            </SwiperSlide>
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Coffee grounds
            </SwiperSlide>
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Eggshells
            </SwiperSlide>
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Stale bread
            </SwiperSlide>
            <SwiperSlide className="font-extrabold text-5xl lg:text-6xl tracking-tight text-nc-gradient">
              Expired curd
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="px-12 mt-12 mb-4 font-light">
          Because our modern lifestyle needs a fundamental change.
        </div>
      </div>
    </>
  );
};

export default Hero;
