import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  .${(props) =>
    props.size === "xl" &&
    css`
      color: #fff;
      font-size: 3rem;
      text-align: center;
      padding: 0 10px;
      @media screen and (min-width: 768px) {
        font-size: 5rem;
      }
      @media screen and (max-width: 368px) {
        font-size: 2rem;
      }
    `}
    ${(props) =>
      props.size === "l" &&
      css`
        font-weight: 600;
        font-size: 80%;
        text-align: center;
        max-width: 1100px;
        margin: 0 auto;
        color: #86868b;
        padding: 0 10px;
        @media screen and (min-width: 768px) {
          line-height: 40px;
          font-weight: 500;
          font-size: 1.8rem;
        }
      `}
    ${(props) =>
      props.size === "h1" &&
      css`
        font-size: 4rem;
        text-align: center;
      `}
      ${(props) =>
        props.gradient &&
        css`
          color: #fff;
          font-size: 3rem;
          color: #60cafc;
          font-weight: 600;
          margin: 40px 0 20px;
          background: linear-gradient(45deg, #ccefff, #60cafc 12%, #2f65ff);
          -webkit-background-clip: text;
          color: transparent;
          @media screen and (min-width: 768px) {
            font-size: 4rem;
          }
        `}
    ${(props) =>
      props.size === "h2" &&
      css`
        font-size: 3.2rem;
        text-align: center;
      `}
  
      ${(props) =>
        props.size === "h4" &&
        css`
          max-width: 1600px;
          font-size: 80%;
          font-weight: 600;
          line-height: 19px;
          text-align: justify;
          color: #86868b;
          margin: -30px auto;

          @media screen and (min-width: 568px) {
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 40px;
            margin: 0 auto;
          }
        `}
      ${(props) =>
        props.left &&
        css`
          text-align: center;
          @media screen and (min-width: 568px) {
            text-align: left;
          }
        `}
      
`;

export default function Title({ children, ...rest }) {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
}
