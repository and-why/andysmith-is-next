import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  ${(props) =>
    (props.direction || props.flexDirection) &&
    css`
      flex-direction: ${props.direction || props.flexDirection};
    `}
  ${(props) =>
    (props.wrap || props.flexWrap) &&
    css`
      flex-wrap: ${props.wrap || props.flexWrap};
    `}
      ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
      ${(props) =>
    (props.flow || props.flexFlow) &&
    css`
      flex-flow: ${props.flow || props.flexFlow};
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
