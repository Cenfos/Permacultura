import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { src: '/images/permacultura1.jpg', alt: 'Permacultura 1', text: 'Diseño de huerto ecológico' },
  { src: '/images/permacultura2.jpg', alt: 'Permacultura 2', text: 'Compostaje natural' },
  { src: '/images/permacultura3.jpg', alt: 'Permacultura 3', text: 'Agroforestería' },
  { src: '/images/permacultura4.jpg', alt: 'Permacultura 4', text: 'Cultivo en terrazas' },
];

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={image.src} alt={image.alt} />
              {image.text && <p className="slide-text">{image.text}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;