import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 40px;
  margin: 40px 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.4fr;
  }
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;
const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  max-height: 40px;
`;
const GoToProducts = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #000;
  padding:2px;
  border: 1px solid #ffd433;
  border-radius: 50%;
  background-color: #ffd433;
  box-shadow: 4px 3px 5px 2px rgba(0,0,0,0.5); 
  svg {
    border:2px solid #000;
    border-radius:50%;
    font-weigth:bold;
    color:#000;
    width: 20px;
    height: 20px;
  }
  &:hover {
    background-color: #000; /* Ganti dengan warna latar belakang yang diinginkan saat hover */
    color: #ffd433; /* Ganti dengan warna teks yang diinginkan saat hover */
    box-shadow: 4px 3px 5px 2px rgba(0,0,0,1); 
    svg {
      border-color: #ffd433; /* Ganti dengan warna border yang diinginkan pada ikon saat hover */
      color: #ffd433; /* Ganti dengan warna ikon yang diinginkan saat hover */
    }
`;
export default function ProductPage({ product }) {
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <WrapperTitle>
              <Title>{product.title}</Title>
              <GoToProducts href="/products">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-1 h-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </GoToProducts>
            </WrapperTitle>
            <p>{product.desc}</p>
            <PriceRow>
              <Price>${product.price}</Price>
              <div>
                <Button primary>Add to cart</Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
