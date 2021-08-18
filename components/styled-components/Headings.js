import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

// export const Heading = styled.h1`
//   font-weight: 900;
//   font-size: 3em;
//   margin: 0;
//   margin-bottom: 0.5em;
// `;

export default function Heading(props) {
  return css`
    font-weight: 900;
    margin: 0 0 0.5em;
    ${(props) =>
      props.fontSize &&
      css`
        font-size: ${props.fontSize};
      `}
    ${(props) =>
      props.fontWeight &&
      css`
        font-weight: ${props.fontWeight};
      `}
      ${(props) => stylesForAll(props)}
  `;
}

export const H1 = styled.h1`
  font-size: 2.6em;
  ${(props) => Heading(props)}
`;
export const H2 = styled.h2`
  font-size: 1.4em;
  ${(props) => Heading(props)}
`;
export const H3 = styled.h3`
  font-size: 1.2em;
  ${(props) => Heading(props)}
`;
export const H4 = styled.h4`
  font-size: 1.2em;
  ${(props) => Heading(props)}
`;
