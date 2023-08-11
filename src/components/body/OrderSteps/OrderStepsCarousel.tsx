import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";

const OrderStepsCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Controller]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".swiper-right",
          prevEl: ".swiper-left",
        }}
        loop
        slidesPerView={4}
        className="h-[200px]"
      >
        <SwiperSlide className="bg-green-400 "> hello </SwiperSlide>
        <SwiperSlide className="bg-violet-400 "> hi </SwiperSlide>
        <SwiperSlide className="bg-blue-400 "> no </SwiperSlide>
        <SwiperSlide className="bg-red-400 "> by </SwiperSlide>
        <SwiperSlide className="bg-green-400 "> hello </SwiperSlide>
        <SwiperSlide className="bg-violet-400 "> hi </SwiperSlide>
        <SwiperSlide className="bg-blue-400 "> no </SwiperSlide>
        <SwiperSlide className="bg-red-400 "> by </SwiperSlide>
      </Swiper>
      <button className="swiper-left transition-all shadow-md flex justify-center items-center absolute z-30 top-1/2 -translate-y-1/2 translate-x-1/2 left-0 h-[30px] w-[30px] rounded-full bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer">
        <AiOutlineLeft size={20} />
      </button>
      <button className="swiper-right transition-all shadow-md flex justify-center items-center absolute z-30 top-1/2 -translate-y-1/2 -translate-x-1/2 right-0 h-[30px] w-[30px] rounded-full bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer">
        <AiOutlineRight size={20} />
      </button>
    </div>
  );
};

export default OrderStepsCarousel;
