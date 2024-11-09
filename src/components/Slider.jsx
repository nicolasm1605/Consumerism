import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';
import image5 from '../assets/images/img4.jpg';

const Slider = () => {
  const slides = [
    { src: image1, link: '/page1', title: 'Title 1', content: 'Content for slide 1' },
    { src: image2, link: '/page2', title: 'Title 2', content: 'Content for slide 2' },
    { src: image3, link: '/page3', title: 'Title 3', content: 'Content for slide 3' },
    { src: image4, link: '/page4', title: 'Title 4', content: 'Content for slide 4' },
    { src: image5, link: '/page5', title: 'Title 5', content: 'Content for slide 5' },
  ];

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#04de8f]">
      <Swiper
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 15 },
          700: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link} className="relative block group">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[250px] lg:h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-200 rounded-lg" />
              <div className="absolute bottom-5 left-5 z-10 text-white">
                <h1 className="text-xl lg:text-2xl">{slide.title}</h1>
                <p className="lg:text-lg">{slide.content}</p>
                <RxArrowTopRight className="w-[35px] h-[35px] mt-2 text-white group-hover:text-blue-500 group-hover:rotate-45 transition-transform duration-200" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

