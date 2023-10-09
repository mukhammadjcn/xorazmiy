import { BrowserRouter as Router } from 'react-router-dom';
import RoutElements from './routes';
import AntConfigProvider from './provider/antConfig';

function App() {
  return (
    <Router>
      <AntConfigProvider>
        <RoutElements />
      </AntConfigProvider>
    </Router>
  );
}

export default App;
