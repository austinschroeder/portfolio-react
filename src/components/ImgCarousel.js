import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import bareilles from '../images/carousel/bareilles.jpg';
// import bluemen from '../images/carousel/bluemen.jpg';
// import bsb from '../images/carousel/bsb.jpg';
// import cypresshill from '../images/carousel/cypresshill.jpg';
// import grohl from '../images/carousel/grohl.jpg';
// import h3000 from '../images/carousel/h3000.jpg';
// import maxxvolume from '../images/carousel/maxxvolume.jpg';
// import morello from '../images/carousel/morello.jpg';
// import morellofist from '../images/carousel/morellofist.jpg';
// import por from '../images/carousel/por.jpg';
// import sll from '../images/carousel/sll.jpg';
// https://create-react-app.dev/docs/using-the-public-folder/

function ImgCarousel() {
  return (
    <div className="splide-container">
      <Splide>
        <SplideSlide>
          <img src="https://picsum.photos/id/227/200/300" alt="one" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/257/200/300" alt="two" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/217/200/300" alt="three" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/287/200/300" alt="four" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/297/200/300" alt="five" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default ImgCarousel;
