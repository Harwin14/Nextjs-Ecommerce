import styled, { keyframes,css } from "styled-components"

const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;

  ${(props) =>
    props.isAddedToCart &&
    css`
      animation: ${moveProductToCart} 1.4s forwards;
    `}
`;
const moveProductToCart = keyframes`
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-100px) translateX(0);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100vh) translateX(100vw);
    opacity: 0;
  }
`;
export default WhiteBox;
