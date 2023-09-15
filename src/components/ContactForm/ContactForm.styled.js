import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  width: 315px;
  margin-top: 16px;
`;

export const LabelSt = styled.label`
  font-size: 21px;
  display: block;
  padding: 4px 0;
`;

// export const Wrapper = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   padding: 12px;
//   border-radius: 8px;
//   width: 300px;
// `;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  align-items: flex-start;
  justify-content: space-between;
`;
export const ErrorMsg = styled(ErrorMessage)`
font-size: 14px;
color: red;
`;

export const StyleButton = styled(Form)`
  display: flex;
  width: 100%;
  padding: 4px;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  justify-content: center;
  background-color: ${p => p.theme.colors.lightgreen};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.green};
  }
`;
