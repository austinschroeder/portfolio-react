import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function ImgCarousel () {
  return (
    <div className="splide-container">
      <Splide>
        <SplideSlide>
          <img src="https://picsum.photos/id/227/200/300" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/257/200/300" alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/217/200/300" alt="Image 3"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/287/200/300" alt="Image 4"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/id/297/200/300" alt="Image 5"/>
        </SplideSlide>
    </Splide>


    </div>
    

  )
}

export default ImgCarousel;