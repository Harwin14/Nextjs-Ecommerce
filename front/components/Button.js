import styled, { css } from "styled-components";
import { primary } from "@/lib/colors";

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  svg {
    height: 30px;
    margin-right: 5px;
  }
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 2px solid #fff;
    `}
    ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `}
    ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 2px solid #000;
    `}
${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      border: 2px solid ${primary};
      color: #fff;
    `}
    ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      border: 2px solid ${primary};
      color: ${primary};
    `}
    ${(props) =>
    props.warning &&
    !props.outline &&
    css`
      background-color: #ffd433;
      border: 2px solid #ffd433;
      color: #000;
    `}
      ${(props) =>
    props.warning &&
    props.outline &&
    css`
      background-color: transparent;
      border: 2px solid #ffd433;
      color: #ffd433;
    `}
    ${(props) =>
      props.gradient &&
      css`
      border: 2px solid ;
      border-radius:90px;
      position:relative;
      z-index:10;
      color:#fff;

        &::before{
          content: "";
          background: linear-gradient(to right, #4D9BFD, #a56cff);
          position:absolute;
          top: -2px;
          left: -2px;
          z-index:-1;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          border-radius: 90px;

        }
        &::after {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #000;
          left: 0;
          top: 0;
          border-radius: 90px;
        }
     
      `}
${(props) =>
    props.size === "l" &&
    css`
      padding: 8px 10px;
      svg {
        height: 20px;
      }
    `}
    ${(props) =>
      props.size === "xl" &&
      css`
        padding: 12px 30px;
        font-size:80%;
        svg {
          height: 20px;
        }
        @media screen and (min-height:568px){
       
        font-size:1.2rem;
        }
      `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;
export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
