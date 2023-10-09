import { Button } from 'antd';
import './hero.scss';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section-content container">
        <div>
          <h1>Muhammad al-Xorazmiy nomidagi xalqaro olimpiada</h1>
          <Button type="primary">Ro‘yxatdan o‘tish</Button>
        </div>
        <img src="src/assets/img/main.png" alt="Al-Xorazmiy's image" />
        <img
          className="hero-img-1"
          src="src/assets/img/hero-1.png"
          alt="triangle image"
        />
        <img
          className="hero-img-2"
          src="src/assets/img/hero-2.png"
          alt="triangle image"
        />
        <img
          className="hero-img-3"
          src="src/assets/img/hero-3.png"
          alt="triangle image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
