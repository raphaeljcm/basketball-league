import { Sidebar } from '@/Sidebar';
import { Outlet, useParams } from 'react-router-dom';
import { useTeamArticlesTitle } from 'src/hooks/articles/useTeamArticles';

import * as S from './styles';

export default function Articles() {
  const { teamId } = useParams();
  const teamsQuery = useTeamArticlesTitle(teamId);

  if (teamsQuery.isError) return <h2>Error loading teams</h2>;

  if (teamsQuery.isLoading) return <h2>Loading teams...</h2>;

  return (
    <S.ArticlesContainer>
      <Sidebar title="Articles" list={teamsQuery.data} />
      <Outlet />
    </S.ArticlesContainer>
  );
}
