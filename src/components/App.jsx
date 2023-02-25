import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LibraryPage } from 'pages/LibraryPage';
import { Layout } from './Layout/Layout';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="library" element={<LibraryPage />}>
        <Route path="watched" element={<div>Watched</div>} />
        <Route path="queue" element={<div>Queue</div>} />
      </Route>
    </Route>
  </Routes>
);

// notifications on error
// додати авторизацію + login and logut buttons
// not found
// onError
// https://react-icons.github.io/react-icons/search?q=film
// https://github.com/veras92/i-scream-film
// https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
