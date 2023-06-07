import { Loading } from '@/Loading';
import { Sidebar } from '@/Sidebar';
import { Outlet } from 'react-router-dom';
import { useTeamNames } from 'src/hooks/useTeamNames';

import * as S from './styles';

export default function Teams() {
  const teamsQuery = useTeamNames();

  if (teamsQuery.isError) return <h2>Error loading teams</h2>;

  return (
    <S.TeamsContainer>
      {teamsQuery.isLoading ? (
        <Loading />
      ) : (
        <Sidebar title="Teams" list={teamsQuery.data} />
      )}
      <Outlet />
    </S.TeamsContainer>
  );
}
