import { Loading } from '@/Loading';
import TeamLogo from '@/TeamLogo';
import { useParams } from 'react-router-dom';
import { useTeam } from 'src/hooks/useTeam';

import * as S from './styles';

export default function Team() {
  const { teamId } = useParams();
  const teamQuery = useTeam(teamId);

  if (teamQuery.isError) return <h2>Error loading team</h2>;

  return (
    <S.Panel>
      {teamQuery.isLoading ? (
        <Loading />
      ) : (
        <div>
          <TeamLogo
            id={teamQuery.data.id}
            style={{ display: 'block', margin: '0 auto' }}
          />
          <h1>{teamQuery.data.name}</h1>
          <ul>
            <li>
              Est.<div>{teamQuery.data.established}</div>
            </li>
            <li>
              Manager<div>{teamQuery.data.manager}</div>
            </li>
            <li>
              Coach<div>{teamQuery.data.coach}</div>
            </li>
          </ul>
          <S.CustomLink to={`/${teamId}`}>
            {teamQuery.data.name} Team Page
          </S.CustomLink>
        </div>
      )}
    </S.Panel>
  );
}
