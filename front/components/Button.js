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
      background-color: #FFD433;
      border: 2px solid #FFD433;
      color: #000;
    `}
      ${(props) =>
    props.warning &&
    props.outline &&
    css`
      background-color: transparent;
      border: 2px solid #FFD433;
      color: #FFD433;
    `}
${(props) =>
    props.size === "l" &&
    css`
      padding: 8px 10px;
      svg {
        height: 20px;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;
export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
