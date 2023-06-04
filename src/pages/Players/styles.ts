import { Link } from 'react-router-dom';
import * as S from 'src/styles';
import { pxToRem } from 'src/utils/responsivity';
import styled from 'styled-components';

export const PlayersContainer = styled(S.Container)`
  display: flex;
`;

export const SidebarContainer = styled.main`
  h3 {
    margin: ${pxToRem(20)} 0;
    font-weight: 300;
    font-size: ${pxToRem(35)};
    font-weight: 900;
  }

  ul {
    display: flex;
    padding: ${pxToRem(10)};
    flex-direction: column;
    padding: 0;

    a {
      line-height: ${pxToRem(25)};
      width: fit-content;
    }
  }
`;

type CustomLinkStyledProps = { active: boolean };

export const CustomLinkStyled = styled(Link)<CustomLinkStyledProps>`
  font-weight: 900;
  color: ${({ active, theme }) => active && theme.white};
`;
