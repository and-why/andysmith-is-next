import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  ${(props) =>
    (props.templateColumns || props.gridTemplateColumns) &&
    css`
      grid-template-columns: ${props.templateColumns || props.gridTemplateColumns};
    `}
  ${(props) =>
    (props.gap || props.gridGap) &&
    css`
      grid-gap: ${props.gap || props.gridGap};
    `}
      ${(props) =>
    (props.rowGap || props.gridRowGap) &&
    css`
      grid-row-gap: ${props.rowGap || props.gridRowGap};
    `}
      ${(props) =>
    (props.columnGap || props.gridColumnGap) &&
    css`
      grid-column-gap: ${props.columnGap || props.gridColumnGap};
    `}
      ${(props) =>
    props.alignContent &&
    css`
      align-content: ${props.alignContent};
    `}
      ${(props) =>
    (props.align || props.alignItems) &&
    css`
      align-items: ${props.align || props.alignItems};
    `}
      ${(props) =>
    (props.justify || props.justifyContent) &&
    css`
      justify-content: ${props.justify || props.justifyContent};
    `}
    ${(props) => stylesForAll(props)}
`;
