import styled from 'styled-components';

export const Loading = styled.div`
  display: block;
  margin: 0 auto;
  height: 0;
  width: 0;
  padding: 7px;
  border: 2px solid ${({ theme }) => theme.yellow};
  border-right-color: ${({ theme }) => theme.black};
  border-radius: 22px;
  animation: rotate 1s infinite linear;
`;
