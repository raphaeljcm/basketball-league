import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  > div {
    width: 100%;

    h1 {
      font-size: 55px;
      text-align: center;
      margin: 20px 0;
      font-weight: 900;
    }

    ul {
      display: flex;
      justify-content: space-around;
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

export const CustomLink = styled(Link)`
  display: block;
  margin: 0 auto;
  max-width: 240px;
  min-width: 150px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.black};
  text-align: center;
  background: ${({ theme }) => theme.yellow};
  font-weight: 900;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(rgba(0, 0, 0, 0.075) 0 0);
  }
`;
