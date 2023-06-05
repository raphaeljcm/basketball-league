import styled from 'styled-components';

export const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  article {
    margin: 20px;
    padding: 20px;

    > h1 {
      margin: 20px 0;
      font-weight: 300;
      font-size: 35px;
      font-weight: 900;
    }

    > p {
      line-height: 35px;
      font-size: 20px;
    }
  }
`;
