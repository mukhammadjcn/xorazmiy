import About from './components/about/About';
import ExplainSection from './components/explain';
import HeaderSection from './components/header/Header';
import HeroSection from './components/hero/Hero';
import LocationSection from './components/location';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <HeaderSection />
      <HeroSection />
      <About />
      <LocationSection />
      <ExplainSection />
    </div>
  );
}

export default Home;
