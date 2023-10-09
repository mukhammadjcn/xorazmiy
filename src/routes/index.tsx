import { Route, Routes } from 'react-router-dom';
import MainLayout from 'src/layout';
import Home from 'src/pages/Home';
import SignUpPage from 'src/pages/auth/signUp';

function RoutElements() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<h2>Not found</h2>} />
    </Routes>
  );
}

export default RoutElements;
