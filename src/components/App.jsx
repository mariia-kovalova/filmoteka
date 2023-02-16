import { Home } from 'pages/Home';
import { Library } from 'pages/Library';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />}>
        <Route path="watched" element={<></>} />
        <Route path="queue" element={<></>} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

// notifications on error
// додати авторизацію + login and lout buttons
// https://react-icons.github.io/react-icons/search?q=film
// https://github.com/veras92/i-scream-film
