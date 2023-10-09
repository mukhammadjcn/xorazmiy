import About from './components/about/About';
import ExplainSection from './components/explain';
import FooterSection from './components/footer/Footer';
import HeaderSection from './components/header/Header';
import HeroSection from './components/hero/Hero';
import LocationSection from './components/location';
import NewsSection from './components/news/News';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <HeaderSection />
      <HeroSection />
      <About />
      <LocationSection />
      <ExplainSection />
      <NewsSection />
      <FooterSection />
    </div>
  );
}

export default Home;
