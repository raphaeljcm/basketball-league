import { Loading } from '@/Loading';
import { Sidebar } from '@/Sidebar';
import { Outlet, useSearchParams } from 'react-router-dom';
import { usePlayerNames } from 'src/hooks/usePlayerNames';

import * as S from './styles';

export default function Players() {
  const [searchParams] = useSearchParams();
  const team = searchParams.get('teamId');
  const playerNames = usePlayerNames(team);

  if (!playerNames.data)
    return (
      <S.PlayersContainer>Could not fetch the players.</S.PlayersContainer>
    );

  return (
    <S.PlayersContainer>
      {playerNames.isLoading ? (
        <Loading />
      ) : (
        <>
          <Sidebar title="Players" list={playerNames.data} />
          <Outlet />
        </>
      )}
    </S.PlayersContainer>
  );
}
