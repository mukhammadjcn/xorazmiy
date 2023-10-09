import { Button } from 'antd';
import './hero.scss';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section-content container">
        <div>
          <h1>Muhammad al-Xorazmiy nomidagi xalqaro olimpiada</h1>

          <Link to={'/register'}>
            <Button type="primary">Ro‘yxatdan o‘tish</Button>
          </Link>
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
