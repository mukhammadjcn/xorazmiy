import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
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
      <div className="section-news-top">
        <p>Yangiliklar</p>
        <div>
          <ArrowLeftOutlined
            className="slider-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <ArrowRightOutlined
            className="slider-next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        // slidesPerView={
        //   isMobileSlider ? 1 : isTabletSlider ? 2 : isLaptopSlider ? 3 : 4
        // }
        slidesPerView={3}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="section-news-slider"
      >
        {NewsCardData.map((news) => (
          <SwiperSlide>
            <div className="section-news-card">
              <img src={news.img} />
              <div>
                <p>{news.title}</p>
                <span>{news.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsSection;
