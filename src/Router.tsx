import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Article = lazy(() => import('@/Article'));
const Player = lazy(() => import('@/Player'));
const Team = lazy(() => import('@/Team'));
const TeamPage = lazy(() => import('@/TeamPage'));

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
const Articles = lazy(() => import('./pages/Articles'));
const Home = lazy(() => import('./pages/Home'));
const Players = lazy(() => import('./pages/Players'));
const Teams = lazy(() => import('./pages/Teams'));

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/players',
          element: <Players />,
          children: [
            { path: ':playerId', element: <Player /> },
            {
              path: '',
              element: <h2 style={{ margin: 'auto' }}>Select a player</h2>,
            },
          ],
        },
        {
          path: '/teams',
          element: <Teams />,
          children: [
            { path: ':teamId', element: <Team /> },
            {
              path: '',
              element: <h2 style={{ margin: 'auto' }}>Select a team</h2>,
            },
          ],
        },
        {
          path: '/:teamId',
          element: <TeamPage />,
        },
        {
          path: '/:teamId/articles',
          element: <Articles />,
          children: [
            { path: ':articleId', element: <Article /> },
            {
              path: '',
              element: <h2 style={{ margin: 'auto' }}>Select an article</h2>,
            },
          ],
        },
      ],
    },
  ]);
}
