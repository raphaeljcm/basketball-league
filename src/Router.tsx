import { Loading } from '@/Loading';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

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
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<Player />} />
            <Route
              path=""
              element={<h2 style={{ margin: 'auto' }}>Select a player</h2>}
            />
          </Route>

          <Route path="/teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route
              path=""
              element={<h2 style={{ margin: 'auto' }}>Select a team</h2>}
            />
          </Route>

          <Route path="/:teamId" element={<TeamPage />} />
          <Route path="/:teamId/articles" element={<Articles />}>
            <Route path=":articleId" element={<Article />} />
            <Route
              path=""
              element={<h2 style={{ margin: 'auto' }}>Select an article</h2>}
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
