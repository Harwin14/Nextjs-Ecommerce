import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;
const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  const addFeaturedToCart = () => {
    addProduct(product._id)
  };
  return (
    <Bg>
      <Center>
        <Wrapper>
          <ColumnWrapper>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.desc}</Desc>
              <ButtonWrapper>
                <ButtonLink
                  href={`/products/${product._id}`}
                  outline
                  white
                >
                  Read more
                </ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonWrapper>
            </div>
          </ColumnWrapper>
          <ColumnWrapper>
            <img
              src="https://harwin-nextjs-ecommerce.s3.amazonaws.com/1690599046480.png"
              alt=""
            />
          </ColumnWrapper>
        </Wrapper>
      </Center>
    </Bg>
  );
}
