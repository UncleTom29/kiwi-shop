import React from "react";
import img1 from "./../../assets/pictures/1 (1).jpg";
import img2 from "./../../assets/pictures/1 (2).jpg";
import img3 from "./../../assets/pictures/1 (3).jpg";
import Coverflow from "react-coverflow";

/* will change the slider styling soon */
const Slider = () => {
  return (
    <div className='main-slider'>
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        infiniteScroll={true}
        enableScroll={false}
        enableHeading={false}>
        <img
          src={img1}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
        />
        <img
          src={img2}
          alt='title or description'
          data-action='/category/619ccc3f992bf51e28e9bc29'
        />
        <img
          src={img3}
          alt='title or description'
          data-action='/category/619c588cde34c22698b74579'
        />
        <img
          src={img1}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
        />
        <img
          src={img2}
          alt='title or description'
          data-action='/category/619ccde1992bf51e28e9bc2e'
        />
        <img
          src={img3}
          alt='title or description'
          data-action='/category/619ccde1992bf51e28e9bc2e'
        />
      </Coverflow>
    </div>
  );
};

export default Slider;
