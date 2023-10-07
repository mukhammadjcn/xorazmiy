import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home';

function RoutElements() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h2>Not found</h2>} />
    </Routes>
  );
}

export default RoutElements;
