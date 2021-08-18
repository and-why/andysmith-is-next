import { css } from 'styled-components';

export default function stylesForAll(props) {
  return css`
    // for all: ;
    ${(props) =>
      props.width &&
      css`
        width: ${props.width};
      `}
    ${(props) =>
      props.height &&
      css`
        height: ${props.height};
      `}
  ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}
  ${(props) =>
      props.marginTop &&
      css`
        margin-top: ${props.marginTop};
      `}
  ${(props) =>
      props.marginBottom &&
      css`
        margin-bottom: ${props.marginBottom};
      `}
  ${(props) =>
      props.marginLeft &&
      css`
        margin-left: ${props.marginLeft};
      `}
  ${(props) =>
      props.marginRight &&
      css`
        margin-right: ${props.marginRight};
      `}
  ${(props) =>
      props.padding &&
      css`
        padding: ${props.padding};
      `} 
  // flex item options
  ${(props) =>
      props.order &&
      css`
        order: ${props.order};
      `} 
  ${(props) =>
      props.flexGrow &&
      css`
        flex-grow: ${props.flexGrow};
      `} 
  ${(props) =>
      props.flexShrink &&
      css`
        flex-shrink: ${props.flexShrink};
      `} 
  ${(props) =>
      props.flexBasis &&
      css`
        flex-basis: ${props.flexBasis};
      `} 
  ${(props) =>
      props.flex &&
      css`
        flex: ${props.flex};
      `} 
  ${(props) =>
      props.alignSelf &&
      css`
        align-self: ${props.alignSelf};
      `} 
  ${(props) =>
      props.borderBottom &&
      css`
        border-bottom: ${props.borderBottom};
      `} 
  ${(props) =>
      props.borderLeft &&
      css`
        border-left: ${props.borderLeft};
      `} 
  ${(props) =>
      props.border &&
      css`
        border: ${props.border};
      `} 
  ${(props) =>
      props.borderTop &&
      css`
        border-top: ${props.borderTop};
      `} 
  ${(props) =>
      props.borderRight &&
      css`
        border-right: ${props.borderRight};
      `} 
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
  ${(props) =>
      props.lineHeight &&
      css`
        line-height: ${props.lineHeight};
      `}
  ${(props) =>
      props.fontStyle &&
      css`
        font-style: ${props.fontStyle};
      `}
  ${(props) =>
      props.textAlign &&
      css`
        text-align: ${props.textAlign};
      `}
  `;
}
