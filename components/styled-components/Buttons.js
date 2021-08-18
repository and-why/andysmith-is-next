import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.5em 0.5em;
  border-radius: 0;
  border: none;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.3s ease;
  color: #10203d;
  font-family: 'Inter', sans-serif;
  :hover,
  :focus {
    transition: all 0.3s ease;
    opacity: 0.8;
  }
  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.theme.color.primary};
      color: white;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: ${(props) => props.theme.color.secondary};
      color: white;
    `}
  ${(props) =>
    props.dark &&
    css`
      background: ${(props) => props.theme.color.black.dark || 'rgb(16, 32, 61)'};
      color: ${(props) => props.theme.color.white || '#fff'};
    `}
  ${(props) =>
    props.light &&
    css`
      background: ${(props) => props.theme.color.white};
      color: ${(props) => props.theme.color.black};
    `}
`;
