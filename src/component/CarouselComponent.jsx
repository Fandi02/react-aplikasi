import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
    return (
      <div>
          <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.samsung.com/is/image/samsung/assets/id/homepage/im-section-gbm/web-gbm-galaxy-tab-s8-series-pc-1440x810.jpg?$1440_810_JPG$"
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
      <h5>Galaxy Tab S8 | S8+ | S8 Ultra</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.samsung.com/is/image/samsung/assets/id/homepage/im-section-gbm/web-gbm-galaxy-s22-pc-1440x810.jpg?$1440_810_JPG$"
      alt="Second slide"
      height="500px"
    />
    <Carousel.Caption>
      <h5>Galaxy S22 | S22+</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.samsung.com/id/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_pc.jpg?imwidth=1366"
      alt="Third slide"
      height="500px"
    />
    <Carousel.Caption>
      <h5>Galaxy Z Fold3 5G</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    )
}

export default CarouselComponent;


