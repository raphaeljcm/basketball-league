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
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
      </Route>
    </Routes>
  );
}
