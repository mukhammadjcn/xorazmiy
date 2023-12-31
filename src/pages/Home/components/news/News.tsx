import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import './news.scss';

// Import Swiper styles
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { news } from './constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NewsSection() {
  const lang = localStorage.getItem('lang') === 'en';
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className="section-news container">
      <div className="section-news-top">
        <p>{t('news')}</p>
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
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="section-news-slider"
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
      >
        {news.map((item) => (
          <SwiperSlide>
            <div className="section-news-card">
              <img src={item.img} />
              <div>
                <Link to={`/news?title=${item.title}`}>
                  <p>{lang ? item.title_en : item?.title}</p>
                </Link>
                <span>{item.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsSection;
