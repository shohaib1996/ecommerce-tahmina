import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FeaturedProducts = () => {
  return (
    <div className="feature-product-container">
      <h1 className="feature-title">Featured Products</h1>
      <div>
        <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ height: 250 }}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 3</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 4</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 5</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 6</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 7</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 8</SwiperSlide>
          <SwiperSlide style={{ height: 250 }}>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
