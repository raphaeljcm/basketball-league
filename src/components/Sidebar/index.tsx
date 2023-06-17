import * as S from './styles';
import { LinkProps, useLocation } from 'react-router-dom';
import { slugify } from 'src/utils/helpers';

interface SidebarProps {
  title: string;
  list: string[];
}

export function Sidebar({ title, list }: SidebarProps) {
  return (
    <S.SidebarContainer>
      <h3>{title}</h3>
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

function CustomLink({ to, children }: LinkProps) {
  const location = useLocation();
  const split = location.pathname.split('/');
  const match = split[split.length - 1] === to;

  return (
    <S.CustomLinkStyled
      to={{ pathname: to as string, search: location.search }}
      active={+match}
    >
      {children}
    </S.CustomLinkStyled>
  );
}
