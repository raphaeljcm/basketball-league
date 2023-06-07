import { Loading } from '@/Loading';
import TeamLogo, { Logos } from '@/TeamLogo';
import { Link, useParams } from 'react-router-dom';
import { useTeamArticles } from 'src/hooks/articles/useTeamArticles';
import { useTeam } from 'src/hooks/useTeam';
import { useTeamNames } from 'src/hooks/useTeamNames';
import * as ES from 'src/styles';
import { formatDate, slugify } from 'src/utils/helpers';

import * as S from './styles';

export function TeamPage() {
  const { teamId } = useParams();
  const teamNames = useTeamNames();
  const teamQuery = useTeam(teamId);
  const teamArticles = useTeamArticles(teamId);

  if (!teamNames.data?.includes(teamId as Logos))
    return (
      <ES.Container>
        <h1>The ${teamId} is not a valid team.</h1>
      </ES.Container>
    );

  if (!teamArticles.data || !teamNames.data || !teamQuery.data)
    return <ES.Container>Could not fetch the team info.</ES.Container>;

  return (
    <ES.Container>
      <S.Panel>
        <TeamLogo id={teamId as Logos} />
        {teamQuery.isLoading ? (
          <Loading />
        ) : (
          <>
            <h1>{teamQuery.data.name}</h1>
            <h4>
              <Link to={{ pathname: '/players', search: `?teamId=${teamId}` }}>
                View Roster
              </Link>
            </h4>
            <h4>Championships</h4>

            <S.ChampionshipsList>
              {teamQuery.data.championships.map(ship => (
                <li key={ship}>{ship}</li>
              ))}
            </S.ChampionshipsList>

            <S.InfoList>
              <li>
                Est.<div>{teamQuery.data.established}</div>
              </li>
              <li>
                Manager <div>{teamQuery.data.manager}</div>
              </li>
              <li>
                Coach <div>{teamQuery.data.coach}</div>
              </li>
              <li>
                Record{' '}
                <div>
                  {teamQuery.data.wins}-{teamQuery.data.losses}
                </div>
              </li>
            </S.InfoList>

            <S.ArticlesList>
              {teamArticles.isLoading ? (
                <Loading />
              ) : (
                teamArticles.data.map(article => (
                  <li key={article.id}>
                    <h4>
                      <Link to={`articles/${slugify(article.title)}`}>
                        {article.title}
                      </Link>
                    </h4>
                    <div>{formatDate(article.date)}</div>
                  </li>
                ))
              )}
            </S.ArticlesList>
          </>
        )}
      </S.Panel>
    </ES.Container>
  );
}
