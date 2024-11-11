import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import image1 from '../assets/images/img1.webp';
import image2 from '../assets/images/img2.webp';
import image3 from '../assets/images/img3.webp';
import image4 from '../assets/images/img4.jpg';
import image5 from '../assets/images/img5.jpg';

const Slider = () => {
  const slides = [
    { src: image1, link: '/post1', title: 'The Hidden Cost of Consumerism and Food Waste', content: 'One of the most alarming signs of overconsumption is food waste...' },
    { src: image2, link: '/post2', title: 'How Synthetic Fibers Are Destroying Our Planet', content: 'The fashion industry’s reliance on cheap, synthetic fibers has led to significant environmental and social consequences...' },
    { src: image3, link: '/post3', title: 'The True Cost of Fuel:', content: 'How Transportation Impacts Our Environment' },
    { src: image4, link: '/post4', title: 'The Psychology of Buying: How Our Desires Are Shaped', content: 'Purchasing decisions are the result of a combination of internal and external factors...' },
    { src: image5, link: '/post5', title: 'The Role of Marketing in Shaping Consumerism', content: 'Marketing plays a pivotal role in shaping consumerism...' },
  ];

  return (
    <div className="flex items-center justify-center flex-col h-screen ">
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
              <div className="absolute bottom-5 left-5 z-10 text-bold text-white">
                <h1 className="text-xl text-bold lg:text-2xl">{slide.title}</h1>
                <p className="lg:text-lg text-bold">{slide.content}</p>
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

