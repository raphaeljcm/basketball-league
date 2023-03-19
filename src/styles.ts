import { pxToRem } from 'src/utils/responsivity';
import styled from 'styled-components';

export const YellowBorder = styled.div`
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.yellow};
  height: 5px;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  max-width: ${pxToRem(1000)};
  min-width: ${pxToRem(280)};
  margin: 0 auto;
  padding: ${pxToRem(20)};
  padding-top: ${pxToRem(50)};
`;
