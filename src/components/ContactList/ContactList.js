import { StyledWrapper, StyledLi, StyledButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledWrapper>
      {contacts.map(({ id, name, number }) => (
        <StyledLi key={id}>
          <p>
            {name}: {number}
            </p>
            <StyledButton type="button" id={id} onClick={() => onDeleteContact(id)}>
            DELETE
          </StyledButton>
        </StyledLi>
      ))}
    </StyledWrapper>
  );
};