import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  background-color: ${p => p.theme.colors.beige};
`;
