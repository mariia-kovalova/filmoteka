import { Home } from 'pages/Home';
import { Library } from 'pages/Library';
import { Routes, Route } from 'react-router-dom';
import { Gallery } from './Gallery';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />}>
        <Route path="watched" element={<Gallery contentType="watched" />} />
        <Route path="queue" element={<Gallery contentType="queue" />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

// notifications on error
// додати авторизацію + login and lout buttons
// https://react-icons.github.io/react-icons/search?q=film
// https://github.com/veras92/i-scream-film
// https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
