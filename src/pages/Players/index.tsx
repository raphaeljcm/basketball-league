import { LinkProps, useLocation, useSearchParams } from 'react-router-dom';
import { usePlayerNames } from 'src/hooks/usePlayerNames';
import * as ES from 'src/styles';
import { slugify } from 'src/utils/helpers';

import * as S from './styles';

function CustomLink({ to, children }: LinkProps) {
  const location = useLocation();
  const playerId = location.pathname.split('/')[2];
  const match = playerId === to;

  return (
    <S.CustomLinkStyled
      to={{ pathname: to as string, search: location.search }}
      active={match}
    >
      {children}
    </S.CustomLinkStyled>
  );
}

function Sidebar({ list }: { list: string[] }) {
  return (
    <S.SidebarContainer>
      <h3>Players</h3>
      <ul>
        {list.map(item => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </S.SidebarContainer>
  );
}

export default function Players() {
  const [searchParams] = useSearchParams();
  const team = searchParams.get('teamId');
  const playerNames = usePlayerNames(team);

  if (!playerNames.data)
    return <ES.Container>Could not fetch the players.</ES.Container>;

  return (
    <ES.Container>
      {playerNames.isLoading ? (
        <p>Players are loading...</p>
      ) : (
        <Sidebar list={playerNames.data} />
      )}
    </ES.Container>
  );
}
