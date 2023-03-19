import { Link, Outlet } from 'react-router-dom';
import * as ES from 'src/styles';

import * as S from './styles';

export default function DefaultLayout() {
  return (
    <>
      <ES.YellowBorder />
      <div>
        <S.NavBar>
          <Link to="/">Home</Link>
          <nav>
            <Link to="/players">Players</Link>
            <Link to="/teams">Teams</Link>
          </nav>
        </S.NavBar>
        <Outlet />
      </div>
    </>
  );
}
