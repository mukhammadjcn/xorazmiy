import { Route, Routes } from 'react-router-dom';
import MainLayout from 'src/layout';
import Home from 'src/pages/Home';
import SignUpPage from 'src/pages/auth/signUp';

function RoutElements() {
  return (
    <Routes>
      <Route path="/auth">
        <Route path="signup" element={<SignUpPage />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>Not found</h2>} />
      </Route>
    </Routes>
  );
}

export default RoutElements;
