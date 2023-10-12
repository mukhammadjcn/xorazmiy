import { Button } from 'antd';
import './hero.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="hero-section">
      <div className="hero-section-content container">
        <div>
          <h1>{t('main__title')}</h1>

          <Link to={'/register'}>
            <Button type="primary">{t('register')}</Button>
          </Link>

          <p style={{ marginTop: 48, fontSize: 20 }}>
            Uzbekistan - Nukus - 2023
          </p>
        </div>
        <img
          src="/img/main.png"
          alt="Al-Xorazmiy's image"
          className="hero-img"
        />
        <img
          className="hero-img-1"
          src="/img/hero-1.png"
          alt="triangle image"
        />
        <img
          className="hero-img-2"
          src="/img/hero-2.png"
          alt="triangle image"
        />
        <img
          className="hero-img-3"
          src="/img/hero-3.png"
          alt="triangle image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
