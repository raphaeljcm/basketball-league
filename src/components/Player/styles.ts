import styled from 'styled-components';

export const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  > img {
    width: 200px;
    border-radius: 100px;
  }

  > h1 {
    font-size: 55px;
    text-align: center;
    margin: 20px 0;
    font-weight: 900;
  }

  > h3 {
    margin: 20px 0;
    font-weight: 300;
    font-size: 35px;
    font-weight: 900;
  }

  > div {
    display: flex;
    justify-content: space-around;

    ul {
      margin-bottom: 30px;
      padding: 0;
    }

    li {
      font-size: 33px;
      margin: 20px 0;
      font-weight: 700;

      div {
        font-size: 24px;
        font-weight: 300;
      }
    }
  }
`;
