import React from "react";
import { Row, Col, Image } from "react-bootstrap";
// import poster1 from "./../../assets/pictures/poster1.jpg";
// import poster2 from "./../../assets/pictures/poster2.jpg";
// import poster3 from "./../../assets/pictures/poster3.jpg";

const ExploreMore = () => {
  return (
    <div className='explore-more'>
      <h2>Explore More</h2>
      <Row>
        <Col md='4' sm='12' className='item'>
          <a href='/category/619ccc3f992bf51e28e9bc29'>
            <Image src={"https://res.cloudinary.com/kiwilab/image/upload/v1637668120/E-commerce/aqyb3dmciutae4r8ayj6.jpg"} />
          </a>
        </Col>
        <Col md='4' sm='12' className='item'>
          <a href='/category/619c588cde34c22698b74579'>
            <Image src={"https://res.cloudinary.com/kiwilab/image/upload/v1637667017/E-commerce/rwajv0wfgixvquefizje.jpg"} />
          </a>
        </Col>
        <Col md='4' sm='12' className='item'>
          <a href='/category/619ccde1992bf51e28e9bc2e'>
            <Image src={"https://res.cloudinary.com/kiwilab/image/upload/v1637668252/E-commerce/arihyd5a0pjilka8g0a0.jpg"} />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default ExploreMore;
