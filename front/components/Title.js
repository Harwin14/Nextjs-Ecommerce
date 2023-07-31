import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  font-size: 1.5em;
  ${(props) =>
    props.size === "xl" &&
    css`
    font-size:5rem;
    text-align:center;
    `}
    ${(props) =>
      props.size === "h2" &&
      css`
      font-size:3.2rem;
      text-align:center;
      `}
    ${(props) =>
      props.size === "h3" &&
      css`
      font-size:1.9rem;
      font-weight:600;
      line-height:40px;
      text-align:center;
      max-width:1100px;
      margin:0 auto;
       color:#86868b;
      `}
`;

export default function Title({children , ...rest}){
  return <StyledTitle {...rest}>{children}</StyledTitle>;
}
