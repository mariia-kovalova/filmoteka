import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LibraryPage } from 'pages/LibraryPage';
import { Layout } from './Layout/Layout';

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="library" element={<LibraryPage />}>
          <Route path="watched" element={<div>Watched</div>} />
          <Route path="queue" element={<div>Queue</div>} />
        </Route>
      </Route>
    </Routes>
  </>
);

// https://github.com/veras92/i-scream-film

// додати авторизацію + login and logut buttons
// not found
// onError
// react form with hooks
// https://react-hook-form.com/get-started
// animation on scrollUpBtn
