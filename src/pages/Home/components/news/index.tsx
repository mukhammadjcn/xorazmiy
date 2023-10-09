import { useRef } from 'react';
import './news.scss';

// Import Swiper styles
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NewsCardData } from './constants';

function NewsSection() {
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className="section-news container">
      <Swiper
        spaceBetween={30}
        // slidesPerView={
        //   isMobileSlider ? 1 : isTabletSlider ? 2 : isLaptopSlider ? 3 : 4
        // }
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="section-team-slider"
      >
        {NewsCardData.map((news) => (
          <SwiperSlide>
            <div className="section-news-card">
              <img src="/img/news1.png" alt="news image" />
              <p>1st Al Khwarizmi International Mathematical Olympiad</p>
              <span>30-Oct-2018</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsSection;
