import About from './components/about/About';
import ExplainSection from './components/explain';
import HeroSection from './components/hero/Hero';
import LocationSection from './components/location';
import NewsSection from './components/news/News';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <About />
      <LocationSection />
      <ExplainSection />
      <NewsSection />
    </div>
  );
}

export default Home;
