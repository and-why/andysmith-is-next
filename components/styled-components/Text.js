import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

export const Text = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 1.35;
  letter-spacing: -0.1px;
  margin: 0;
  margin-bottom: 0.5em;
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
  ${(props) => stylesForAll(props)}
`;
