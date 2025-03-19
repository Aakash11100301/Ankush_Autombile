import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { car1, car2, car3, car4, car5, car6, toyotaallcars } from '../../assets/index.assets.js';
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
  const cars = [toyotaallcars, car1, car2, car3, car4, car5, car6];

  return (
    <div className="relative w-full bg-gray-900 flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Slider Container */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          spaceBetween={10} 
          slidesPerView={1}
          centeredSlides={true}
          speed={800} // Smoother transition effect
          className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full"
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full bg-gray-800 rounded-xl shadow-xl">
                <img 
                  src={car} 
                  alt={`Auto Repair Example ${index + 1}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      <button className="custom-next absolute top-1/2 right-2 md:right-4 z-20 -translate-y-1/2 p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all shadow-md">
        <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
      </button>
      <button className="custom-prev absolute top-1/2 left-2 md:left-4 z-20 -translate-y-1/2 p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all shadow-md">
        <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
      </button>

      {/* Pagination Dots */}
      <div className="custom-pagination absolute bottom-4 md:bottom-6 left-1/2 z-20 -translate-x-1/2 flex gap-2" />

      {/* Service Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white text-shadow-lg">
            Restore Your Ride to Perfection
          </h1>
          <p className="text-base md:text-2xl text-white mb-6 md:mb-8 font-light text-shadow-md">
            Premium dent removal, precision paint correction, and expert auto restoration.
          </p>
          <Link to="/consultation">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold shadow-md transition-all">
              Book Your Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
