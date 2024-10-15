import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import products from "../../../public/products.json";
import next from "../../assets/slideImages/chevrons-right.svg";
import prev from "../../assets/slideImages/chevrons-left.svg";

const FeaturedProducts = () => {
  return (
    <div className="feature-product-container">
      <h1 className="feature-title">Featured Products</h1>
      <div className="section-container">
        <Swiper
          navigation={{
            nextEl: "#featured_next_el",
            prevEl: "#featured_prev_el",
          }}
          slidesPerView={5}
          spaceBetween={0}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide>
              <div className="product-container">
                <div className="feature-img">
                  <img src={product.img} alt="" />
                </div>
                <div className="sale-tag">
                  {product.discountPercentage} %off
                </div>
                <div className="sale-tag-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M7.90332 0H-3.8147e-05V7.90336L7.90332 0Z"
                      fill="#C13F15"
                    />
                  </svg>
                </div>
                <div className="favourite-tag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <circle
                      cx="16.1796"
                      cy="16.1796"
                      r="16.1796"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.7706 11.9806C14.3957 10.3784 12.1031 9.94743 10.3806 11.4146C8.65801 12.8817 8.4155 15.3347 9.76823 17.0699C10.8929 18.5126 14.2967 21.5553 15.4123 22.5401C15.5371 22.6503 15.5995 22.7054 15.6723 22.727C15.7358 22.7459 15.8053 22.7459 15.8688 22.727C15.9416 22.7054 16.004 22.6503 16.1288 22.5401C17.2444 21.5553 20.6482 18.5126 21.7729 17.0699C23.1256 15.3347 22.9127 12.8663 21.1605 11.4146C19.4084 9.96286 17.1454 10.3784 15.7706 11.9806Z"
                      stroke="#3C4242"
                      stroke-width="1.26066"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="product-details-container">
                  <h2 className="product-title">{product.title}</h2>
                  <hr />
                  <div className="product-details">
                    <p className="product-price">${product.price}</p>
                    <p className="discount-price">${product.discountPrice}</p>
                    <div>
                      <span className="rating">★</span> ({product.rating})
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigation_buttons">
        <button className="slider-btn" id="featured_next_el">
            <img src={prev} alt="Previous button" />
          </button>
          <button className="slider-btn" id="featured_prev_el">
            <img src={next} alt="Next button" />
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
