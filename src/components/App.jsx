import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LibraryPage } from 'pages/LibraryPage';
import { Layout } from './Layout/Layout';

export const App = () => <RouterProvider router={router} />;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>Error</div>,
      children: [
        {
          index: true,
          element: <HomePage />,
          // loader: teamLoader,
        },
        {
          path: 'library',
          element: <LibraryPage />,
          // loader: teamLoader,
          children: [
            {
              path: 'watched',
              element: <>Watched</>,
            },
            {
              path: 'queue',
              element: <>Queue</>,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/filmoteka',
  }
);

// notifications on error
// додати авторизацію + login and lout buttons
// not found
// onError
// https://react-icons.github.io/react-icons/search?q=film
// https://github.com/veras92/i-scream-film
// https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
