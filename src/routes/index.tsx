import { Route, Routes } from 'react-router-dom';
import MainLayout from 'src/layout';
import Home from 'src/pages/Home';
import ParticipantsPage from 'src/pages/Participants';
import PlanPage from 'src/pages/Plan';
import SignUpPage from 'src/pages/auth/signUp';

function RoutElements() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
      </Route>
      <Route path="*" element={<h2>Not found</h2>} />
    </Routes>
  );
}

export default RoutElements;
