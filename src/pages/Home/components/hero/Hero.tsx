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
      </div>
    </div>
  );
}

export default HeroSection;
