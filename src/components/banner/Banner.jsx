import React from "react";
import banner_img from "../../assets/banner/banner_img.png";
import banner_sale from "../../assets/banner/banner_sale.png";

const Banner = () => {
  return (
    <div className="bg-banner">
      <div className="banner-content">
        <div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 0C9.30555 4.83836 13.1616 8.69447 18 9C13.1616 9.30555 9.30555 13.1616 9 18C8.69447 13.1616 4.83836 9.30555 0 9C4.83836 8.69447 8.69447 4.83836 9 0Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="new-arrival">New Arrival</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 0C9.30555 4.83836 13.1616 8.69447 18 9C13.1616 9.30555 9.30555 13.1616 9 18C8.69447 13.1616 4.83836 9.30555 0 9C4.83836 8.69447 8.69447 4.83836 9 0Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div >
            <h1 className="banner-title">Shop with Confidence: Trusted Source for Quality Products</h1>
          </div>
          <div>
            <p className="banner-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <div>
            <button className="banner-btn">Shop Now</button>
          </div>
          <div className="banner-ratings">
            <div>
                <p className="banner-ratings-number">200+</p>
                <p className="banner-ratings-desc">International Brands</p>
            </div>
            <div className="middle-ratings">
                <p className="banner-ratings-number">200+</p>
                <p className="banner-ratings-desc">International Brands</p>
            </div>
            <div>
                <p className="banner-ratings-number">200+</p>
                <p className="banner-ratings-desc">International Brands</p>
            </div>
         
          </div>
        </div>
        <div className="banner-img-container">
          <img src={banner_img} alt="" />
          <div className="banner-sale">
            <img src={banner_sale} alt="" height={180} width={175}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
