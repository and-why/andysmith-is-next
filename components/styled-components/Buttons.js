import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.5em 0.5em;
  border-radius: 0;
  border: none;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.3s ease;
  color: var(--black);
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
      color: var(--black);
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: ${(props) => props.theme.color.secondary};
      color: var(--black);
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

export const LinkButton = styled.a`
  position: relative;
  text-decoration: none;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #e5e5e5;
  color: var(--black);
  border-radius: 10px;
  text-align: center;
  svg {
    margin-left: 2px;
  }
  &:hover {
    background: var(--primary);
    color: white;
    svg g {
      stroke: #fff;
    }
  }
`;
