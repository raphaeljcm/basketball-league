import { Container } from 'src/styles';
import { pxToRem } from 'src/utils/responsivity';
import styled from 'styled-components';

export const NavBar = styled(Container)`
  font-size: ${pxToRem(16)};
  text-transform: uppercase;
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  nav a {
    padding: 0 ${pxToRem(10)};
  }
`;
