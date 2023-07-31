import styled, { css, keyframes } from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";

const ProductWrapper = styled.div``;
const moveProductToCart = keyframes`
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-500px) translateX(0);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100vh) translateX(100vw);
    opacity: 0;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  box-shadow: 4px 3px 5px 2px rgba(0, 0, 0, 0.5);
  padding: 10px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
  &:hover {
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 1);
  }

  ${(props) =>
    props.isAddedToCart &&
    css`
      animation: ${moveProductToCart} 1.4s forwards;
    `}
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  @media screen and (max-width: 768px) {
    height: 103px;
  }
`;
const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;
export default function ProductBox({ _id, title, desc, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = `/product/${_id}`;

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCart = () => {
    addProduct(_id);
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 1000);
  };

  return (
    <ProductWrapper>
     <WhiteBox href={url} isAddedToCart={isAddedToCart}>
        <div>
          <img src={images?.[0]} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}> {title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            block
            primary
            outline
            onClick={addToCart}
            isAddedToCart={isAddedToCart}
          >
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
