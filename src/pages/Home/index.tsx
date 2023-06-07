import { Loading } from '@/Loading';
import TeamLogo from '@/TeamLogo';
import { Link } from 'react-router-dom';
import { useTeamNames } from 'src/hooks/useTeamNames';
import { Container } from 'src/styles';

import * as S from './styles';

export default function Home() {
  const teamNames = useTeamNames();

  return (
    <Container>
      <S.LargeHeader>Hash History Basketball League</S.LargeHeader>
      <S.SmallHeader>Select a team</S.SmallHeader>

      <S.HomeGrid>
        {teamNames.isLoading && <Loading />}
        {teamNames.isError && <p>The was an error fetching the teams</p>}
        {!!teamNames.data && teamNames.data.length <= 0 ? (
          <p>Could not find any team</p>
        ) : (
          !!teamNames.data &&
          teamNames.data.map(team => (
            <Link key={team} to={`/${team}`}>
              <TeamLogo id={team} width="125px" />
            </Link>
          ))
        )}
      </S.HomeGrid>
    </Container>
  );
}
