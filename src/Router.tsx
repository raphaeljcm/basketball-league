import { Player } from '@/Player';
import { Team } from '@/Team';
import { TeamPage } from '@/TeamPage';
import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import Players from './pages/Players';
import Teams from './pages/Teams';

export function Router() {
  return (
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
      </Route>
    </Routes>
  );
}
