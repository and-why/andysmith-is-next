import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-width: 250px;
  max-width: 700px;
  width: 100%;
  .full-width {
    width: 100%;
  }

  ${(props) =>
    props.width &&
    css`
      max-width: ${props.width};
    `}
`;
