import { pxToRem } from 'src/utils/responsivity';
import styled from 'styled-components';

export const Panel = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${pxToRem(1200)};
  margin: 0 auto;

  h1 {
    font-size: ${pxToRem(55)};
    text-align: center;
    margin: ${pxToRem(20)};
    font-weight: 900;
  }

  h4 {
    margin: 5;
  }
`;

export const ChampionshipsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin: 0 ${pxToRem(10)};
  }
`;

export const InfoList = styled.ul`
  margin-bottom: ${pxToRem(30)};
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;

  li {
    font-size: ${pxToRem(33)};
    margin: ${pxToRem(20)} 0;
    font-weight: 700;
  }

  div {
    font-size: ${pxToRem(24)};
    font-weight: 300;
  }
`;

export const ArticlesList = styled.ul`
  margin: 0;
  padding: 0;

  li {
    font-size: 28px;
    margin-bottom: 30px;
    cursor: pointer;

    h4 {
      margin: 0;
      font-weight: 300;
    }

    div {
      font-size: 14px;
      padding: 0;
    }
  }
`;
