import styled, { css } from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  ul {
    list-style: none;
    flex-wrap: wrap;
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    margin: 1em 1em 1em 0;

    a {
      display: flex;
      flex-shrink: 0;
      position: relative;
      text-decoration: none;
      background: #e5e5e5;
      color: black;
      padding: 0.5em 1em;
      border-radius: 10px;
      font-weight: 500;
      &[aria-current='true'] {
        background: var(--primary);
        color: white;
      }
      &:hover {
        background: var(--primary);
        color: white;
        svg g {
          stroke: #fff;
        }
      }
      &.clickcopy:hover:after {
        content: '';
        position: absolute;
        border: 10px solid #000;
        border-color: transparent transparent black transparent;
        right: 50%;
        top: 17px;
        transform: translateX(50%);
      }
      &.clickcopy:hover:before {
        content: attr(data-text);
        position: absolute;
        top: 35px;
        right: 50%;
        transform: translateX(50%);
        background: black;
        color: white;
        padding: 1em;
        border-radius: 10px;
        width: 80%;
        text-align: center;
        z-index: 99;
      }
    }
  }
`;
