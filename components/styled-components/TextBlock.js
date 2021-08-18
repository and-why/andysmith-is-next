import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .small {
    margin: 0 0 0.5em;
  }
  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}
  ${(props) =>
    props.width &&
    css`
      text-align: ${props.width};
    `}
    ${(props) => stylesForAll(props)}
`;
