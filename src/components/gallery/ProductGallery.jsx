import React from "react";

import img1 from "../../assets/gallery/image1.png";
import img2 from "../../assets/gallery/image2.png";
import img3 from "../../assets/gallery/image3.png";
import img4 from "../../assets/gallery/image4.png";
import img5 from "../../assets/gallery/image5.png";
import img6 from "../../assets/gallery/image6.png";
import img7 from "../../assets/gallery/image7.png";
import img8 from "../../assets/gallery/image8.png";
import img9 from "../../assets/gallery/image9.png";
import img10 from "../../assets/gallery/image10.png";

const ProductGallery = () => {
  return (
    <div className="galleryPhotoContainer">
      <div className="joint1">
        <div className="first2">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="sixSeven">
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
        </div>
      </div>

      <div>
        <img src={img3} alt="" />
      </div>

      <div className="joint2">
        <div className="fourFive">
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="eightNineTen">
          <div>
            <img src={img8} alt="" />
          </div>
          <div>
            <img src={img9} alt="" />
          </div>
          <div>
            <img src={img10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
