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
    background-color: #000; 
    color: #ffd433; 
    box-shadow: 4px 3px 5px 2px rgba(0,0,0,1); 
    svg {
      border-color: #ffd433;
      color: #ffd433; 
    }
`;
const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: #000;
  opacity: 0.6;
`;
const Container = styled.div`
  background-color: #000;
  color: #fff;
  img {
    max-width: 100%;
  }
`;
const StyleP = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  max-width: 1100px;
  margin: 40px auto;
  color: #fff;
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 120px;
  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
const CardPurple = styled.div`
  position: relative; 
  padding: 20px;
  border-radius: 9rem;
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    background-color: #0B1940;
    box-shadow: 
    -42px 100px 100px -4px #0B1940,
    -52px -39px 100px 3px #0B1940,
    -42px 64px 100px 7px #0B1940,
    56px 7px 100px 31px #0B1940;

  p {
    color: #fff;
    /* Other styles for the paragraph */
  }
`;
const CardBlue = styled.div`
position: relative; 
padding: 20px;
border-radius: 9rem;
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  padding:9px;
  border-radius: 3rem;
  background-color: #130E48;
  box-shadow: -27px 12px 100px 100px #130E48;

p {
  color: #fff;
  /* Other styles for the paragraph */
}

`;
export default function ProductPage({ product }) {
  return (
    <Container>
      <StickyHeader>
        <Header />
      </StickyHeader>
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

      <Center>
        <img src="../hero_intro.jpg" />
        <Title size="xl">
          Mover. Maker.
          <br /> Boundary breaker.
        </Title>
        <Title size="h3">
          Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and
          efficiency further than ever. It delivers exceptional performance
          whether it’s plugged in or not, and now has even longer battery life.
          Combined with a stunning Liquid Retina XDR display and all the ports
          you need — this is a pro laptop without equal.
        </Title>
        <StyleP>From $1999</StyleP>

        <Title size="h2">Supercharged by</Title>
        <CardWrapper>
          <CardPurple>
            <img src="../m2.png" />
            <p>
              1 Up to 12-core CPU
              <br /> Up to 19-core GPU
              <br /> Up to 32GB unified memory
              <br />
              200GB/s memory bandwidth
            </p>
          </CardPurple>
          <CardBlue>
            <img src="../m2_max.png" />
            <p>
              12-core CPU <br /> Up to 38-core GPU <br />
              Up to 96GB unified memory <br /> 400GB/s memory bandwidth
            </p>
          </CardBlue>
        </CardWrapper>
        <h3>
          Introducing the next generation of Apple silicon for pros: The
          lightning-fast M2 Pro and the extraordinary M2 Max — the most powerful
          and efficient chip ever in a pro laptop.
        </h3>
        <Button>Go inside M2 Pro and M2 Max +</Button>

        <div>
          <h1>M2 Pro</h1>
          <p>
            M2 Pro brings power to take on even more demanding projects. The up
            to 12‑core CPU and next‑generation Neural Engine make pro workflows
            fly — from sorting and editing thousands of images to running
            computational fluid dynamics simulations. And the up to 19‑core GPU
            drives a huge boost in graphics performance for both work and play.
          </p>
          <img src="../wild_beasts.jpg" />
          <img src="../screen_processing.jpg" />
        </div>
        <div>
          <h1>M2 Max</h1>
          <p>
            The most powerful and efficient chip ever in a pro laptop, M2 Max is
            engineered to help pros push the boundaries of their ingenuity and
            creativity. With the same next‑generation 12‑core CPU as M2 Pro, M2
            Max has twice the memory bandwidth, up to three times the unified
            memory, and up to 38 GPU cores. So you can render effects, merge
            massive panoramas, and design extreme 3D geometry on an
            unprecedented scale.
          </p>
          <img src="../wild_beasts.jpg" />
          <img src="../screen_processing.jpg" />
        </div>
      </Center>
    </Container>
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
