import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 40px 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.4fr;
  }
  ${(props) =>
    props.featured &&
    css`
      padding: 20px;
      border-radius: 10px;
      color: #000;
      background-color: #ddd;
    `}
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
  background-color: transparent;
  color: #000;
  img {
    max-width: 100%;
  }
  ${(props) =>
    props.featured &&
    css`
      background-color: #000;
      color: #fff;
    `}
`;
const TitleIndex = styled.div`
  margin: 50px 0 0;
  @media screen and (min-width: 768px) {
    margin: 200px 0 -200px;
  }
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 100px auto;

  @media screen and (min-width: 768px) {
    width: 800px;
  }
  @media screen and (max-width: 368px) {
    margin: 0 auto;
  }
`;

const M2wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (min-width: 568px) {
    align-items: left;
    width: 58%;
  }
`;
const Hero = styled.div`
  background-color: #000;
  background-image: url(../m2_bg.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  max-width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    padding: 200px;
  }
`;

const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: 200px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    img {
      max-width: 100%;
      height: 280px;
      margin: 10px -100px;
    }
  }
  @media screen and (min-width: 1268px) {
    img {
      max-width: 100%;
      height: 400px;
      margin: 10px -100px;
    }
  }
`;

const GradientPBlue = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.5;
  background: linear-gradient(to bottom right, #8fdafd, #4a93fe);
  -webkit-background-clip: text;
  color: transparent;
  @media screen and (max-width: 368px) {
    font-size: 0.8rem;
  }
`;
const GradientPPurple = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.5;
  background: linear-gradient(to bottom right, #c699ff, #a55aff);
  -webkit-background-clip: text;
  color: transparent;
  @media screen and (max-width: 368px) {
    font-size: 0.8rem;
  }
`;

const FeatureDiv = styled.div`
  margin: 0 auto;
  Title {
    text-align: center;
  }
  @media screen and(min-heigh:568px) {
    margin: 300px;
  }
`;
const Feature = styled.div`
  background-color: #000;
  background-image: url(../wild_beasts.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  display: grid;
  grid-template-columns: 1fr;
  margin: 80px 400px;
  padding: 300px;
  @media screen and(min-heigh:568px) {
    padding: 200px;
    background-size: 100%;
  }
`;

const LaptopM2 = styled.div`
  max-width: 1000px;
  height: 1000px; /* Sesuaikan ukuran dengan kebutuhan Anda */
  background-image: url("../m2_laptop.jpg");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  margin: -200px auto;
`;
const FeatureScreen = styled.div`
  position: absolute;
  top: 40px; /* Sesuaikan posisi vertikal sesuai kebutuhan */
  left: 85px; /* Sesuaikan posisi horizontal sesuai kebutuhan */
  width: 830px; /* Sesuaikan ukuran dengan kebutuhan Anda */
  height: 900px; /* Sesuaikan ukuran dengan kebutuhan Anda */
  background-image: url(../screen_processing.jpg);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function ProductPage({ product }) {
  const [isFeatured, setIsFeatured] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const featured = router.asPath.includes("64a66001ead2f50ac344e9c8");
    if (featured) {
      setIsFeatured(true);
    }
  }, [router.asPath]);

  return (
    <Container featured={isFeatured}>
      <StickyHeader>
        <Header />
      </StickyHeader>
      <Center>
        <ColWrapper featured={isFeatured}>
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

      {isFeatured && (
        <>
          <img src="../hero_intro.jpg" />
          <Title size="xl">
            Mover. Maker.
            <br /> Boundary breaker.
          </Title>

          <Title size="l">
            Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and
            efficiency further than ever. It delivers exceptional performance
            whether it’s plugged in or not, and now has even longer battery
            life. Combined with a stunning Liquid Retina XDR display and all the
            ports you need — this is a pro laptop without equal.
          </Title>
          <TitleIndex>
            <Title size="xl">Supercharged by</Title>
          </TitleIndex>

          <Hero>
            <ContentCenter>
              <img src="../m2.png" />
              <GradientPBlue>
                1 Up to 12-core CPU
                <br /> Up to 19-core GPU
                <br /> Up to 32GB unified memory
                <br />
                200GB/s memory bandwidth
              </GradientPBlue>
            </ContentCenter>
            <ContentCenter>
              <img src="../m2_max.png" />
              <GradientPPurple>
                12-core CPU <br /> Up to 38-core GPU <br />
                Up to 96GB unified memory <br /> 400GB/s memory bandwidth
              </GradientPPurple>
            </ContentCenter>
          </Hero>

          <DescWrapper>
            <Title size="l">
              Introducing the next generation of Apple silicon for pros: The
              lightning-fast M2 Pro and the extraordinary M2 Max — the most
              powerful and efficient chip ever in a pro laptop.
            </Title>
            <Button gradient size="xl">
              Go inside M2 Pro and M2 Max
            </Button>
          </DescWrapper>

          <FeatureDiv>
            <M2wrapper>
              <Title gradient>M2 Pro</Title>
              <Title size="l" left>
                M2 Pro brings power to take on even more demanding projects. The
                up to 12‑core CPU and next‑generation Neural Engine make pro
                workflows fly — from sorting and editing thousands of images to
                running computational fluid dynamics simulations. And the up to
                19‑core GPU drives a huge boost in graphics performance for both
                work and play.
              </Title>
            </M2wrapper>

            <Feature></Feature>
            <LaptopM2>
              <FeatureScreen />
            </LaptopM2>
          </FeatureDiv>
          <FeatureDiv>
            <M2wrapper>
              <Title gradient>M2 Max</Title>
              <Title size="l" left>
                The most powerful and efficient chip ever in a pro laptop, M2
                Max is engineered to help pros push the boundaries of their
                ingenuity and creativity. With the same next‑generation 12‑core
                CPU as M2 Pro, M2 Max has twice the memory bandwidth, up to
                three times the unified memory, and up to 38 GPU cores. So you
                can render effects, merge massive panoramas, and design extreme
                3D geometry on an unprecedented scale.
              </Title>
              
              {/* <img src="../wild_beasts.jpg" />
        <img src="../screen_processing.jpg" /> */}
            </M2wrapper>
            <Feature></Feature>
            <LaptopM2>
              <FeatureScreen />
            </LaptopM2>
          </FeatureDiv>
        </>
      )}
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
