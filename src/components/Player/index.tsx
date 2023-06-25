import { Loading } from '@/Loading';
import { Link, useParams } from 'react-router-dom';
import { usePlayer } from 'src/hooks/usePlayer';

import * as S from './styles';

export function Player() {
  const { playerId } = useParams();
  const playerQuery = usePlayer(playerId);

  if (playerQuery.isError)
    return <h2>An error occured while loading the player</h2>;

  return (
    <S.Panel>
      {playerQuery.isLoading ? (
        <Loading />
      ) : (
        <>
          <img
            src={playerQuery.data.avatar}
            alt={`Avatar for ${playerQuery.data.name}`}
          />
          <h1>{playerQuery.data.name}</h1>
          <h3>#{playerQuery.data.number}</h3>

          <div>
            <ul style={{ marginRight: 80 }}>
              <li>
                Team
                <div>
                  <Link to={`/${playerQuery.data.teamId}`}>
                    {playerQuery.data.teamId[0].toUpperCase() +
                      playerQuery.data.teamId.slice(1)}
                  </Link>
                </div>
              </li>
              <li>
                Position<div>{playerQuery.data.position}</div>
              </li>
              <li>
                PPG<div>{playerQuery.data.ppg}</div>
              </li>
            </ul>
            <ul>
              <li>
                APG<div>{playerQuery.data.apg}</div>
              </li>
              <li>
                SPG<div>{playerQuery.data.spg}</div>
              </li>
              <li>
                RPG<div>{playerQuery.data.rpg}</div>
              </li>
            </ul>
          </div>
        </>
      )}
    </S.Panel>
  );
}
