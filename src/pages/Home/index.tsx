import HeaderSection from './components/header/Header';
import HeroSection from './components/hero/Hero';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <HeaderSection />
      <HeroSection />
    </div>
  );
}

export default Home;
