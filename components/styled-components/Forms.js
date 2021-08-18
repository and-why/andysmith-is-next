import styled, { css } from 'styled-components';

export const Form = styled.form`
  padding: 1em;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  padding: 0.5em 1em;
  margin-bottom: 0.5em;
  background: white;
  border: 2px solid white;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.3s ease;
  color: #10203d;
  font-family: 'Inter', sans-serif;
  :focus,
  :focus-visible {
    outline: -webkit-focus-ring-color #10203d;
    outline-color: #10203d;
    outline-offset: 1px;
  }
  ${(props) =>
    props.dark &&
    css`
      border-color: #10203d;
    `}
`;

export const CheckBox = styled.input;
