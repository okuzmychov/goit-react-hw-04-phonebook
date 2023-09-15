import styled from 'styled-components';

export const StyledWrapper = styled.ul`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 100%;
    margin-top: 10px;
    margin-bottom: 16px;
    padding: 8px;
    outline: 1px solid ${p => p.theme.colors.green};
    border-radius: 4px;
    background-color: ${p => p.theme.colors.lightgreen};
`;

export const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
`;

export const StyledButton = styled.button`
    width: 100px;
    margin-left: 8px;
    cursor: pointer;
    border: none;
    padding: 0px 2px 2px 2px;
    border: none;
    border-radius: 4px;
    &:hover,
    &:focus {
    outline: 1px solid ${p => p.theme.colors.green};
    background-color: ${p => p.theme.colors.lightgreen};
}
`;