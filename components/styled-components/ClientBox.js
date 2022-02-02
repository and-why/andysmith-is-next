import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

export const ClientBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  h3 {
    border-radius: 15px;
    padding: 25px;
    background: var(--gray);
    font-weight: 700;
    font-size: 1.2em;
  }
  p {
    margin: 0.25em;
  }
`;
