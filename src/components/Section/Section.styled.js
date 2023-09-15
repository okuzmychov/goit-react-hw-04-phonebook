import styled from 'styled-components';

export const SectionWrapper = styled.section`
  max-width: 370px;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid ${p => p.theme.colors.lightgreen};
  border-radius: 8px;
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const ButtonSubmit = styled.button`
  margin-top: 8px;
  padding: 4px;
  background-color: ${p => p.theme.colors.beige};
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.lightgreen};
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 1px solid ${p => p.theme.colors.green};
    background-color: ${p => p.theme.colors.lightgreen};
    }
`;