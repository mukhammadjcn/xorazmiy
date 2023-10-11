import { BrowserRouter as Router } from 'react-router-dom';
import RoutElements from './routes';
import AntConfigProvider from './provider/antConfig';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang') ?? 'uz');
  }, []);

  return (
    <Router>
      <AntConfigProvider>
        <RoutElements />
      </AntConfigProvider>
    </Router>
  );
}

export default App;
