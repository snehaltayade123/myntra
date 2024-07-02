import React from 'react';
import { NavLink } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Img1 from '../assets/carsoualImg/img1.png'
import Img2 from '../assets/carsoualImg/img2.png'
import Img3 from '../assets/carsoualImg/img3.png'
import Img4 from '../assets/carsoualImg/img4.png'
import Img5 from '../assets/carsoualImg/img5.png'
import Img6 from '../assets/carsoualImg/img6.png'
import Img7 from '../assets/carsoualImg/img7.png'

var Links = [
    {
        img: Img1,
        "path":"/"
    },
    {
        img: Img2,
        "path": "/"
    },
    {
        img: Img3,
        "path": "/"
    },
    {
        img: Img4,
        "path": "/"
    },
    {
        img: Img5,
        "path": "/"
    },
     {
        img: Img6,
        "path": "/"
    },
      {
        img: Img7,
        "path": "/"
    }
]

function carousal() {
    const options = {
        type: 'loop',
        perPage: 3,
        perMove: 4,
        autoplay: true,
    };
  return (
      <Splide options={options}>
          {
              Links.map((links, map) => (
                  <SplideSlide> <NavLink to={links.path}><img src={links.img} /></NavLink></SplideSlide>
              ))
          }
      </Splide>
  )
}

export default carousal