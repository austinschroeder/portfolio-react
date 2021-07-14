import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function ImgCarousel () {
  return (
    <div>
      <Splide>
        <SplideSlide>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Image 2"/>
        </SplideSlide>
    </Splide>


    </div>
    

  )
}

export default ImgCarousel;
