import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import PageLayout from './Layouts/PageLayout';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
