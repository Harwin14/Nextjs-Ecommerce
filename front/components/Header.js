import Link from "next/link";
import styled, { keyframes } from "styled-components";
import Center from "./Center";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import CartIcon from "./icons/CartIcon";
import Button from "./Button";
import randomcolor from "randomcolor";
import { useRouter } from "next/router";

const glowingAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;
const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive ? `display : block ; ` : `display : none ;`}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;

    position: static;
    padding: 0;
  }
  & > :nth-child(5) {
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &::before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      -webkit-filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: ${glowingAnimation} 20s linear infinite;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
      opacity: 0;
    }

    &::after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #222;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
  }

  & > :nth-child(5):hover::before {
    opacity: 1;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 5px;
  transition: border-bottom 0.3s ease; /* Pindahkan properti transition ke sini */
  border-bottom: ${(props) => (props.active ? "2px solid white" : "none")};
  @media screen and (min-width: 768px) {
    padding: 0;
    border-bottom: ${(props) => (props.active ? "2px solid white" : "none")};
    transition: border-bottom 0.3s ease; /* Biarkan properti transition di sini */
  }
  &:hover {
    color: #fff;
    border-bottom: 2px solid #fff;
    max-width: 100%;
  }

`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const StyledButton = styled(Button)`
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingAnimation} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }
`;
export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [buttonColor, setButtonColor] = useState("");
  const router = useRouter();

  const randomizeButtonColor = () => {
    const color = randomcolor();
    setButtonColor(color);
  };
  useEffect(() => {
    randomizeButtonColor();
  }, [cartProducts.length]);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"} active={router.pathname === "/"}>
              Home
            </NavLink>
            <NavLink
              href={"/products"}
              active={router.pathname === "/products"}
            >
              All Products
            </NavLink>
            <NavLink
              href={"/categories"}
              active={router.pathname === "/categories"}
            >
              Categories
            </NavLink>
            <NavLink href={"/account"} active={router.pathname === "/account"}>
              Account
            </NavLink>
            <NavLink href={"/cart"}>
              <StyledButton
                warning
                outline
                size="l"
                style={{ color: buttonColor, borderColor: buttonColor }}
              >
                <CartIcon />
                Cart ({cartProducts.length})
              </StyledButton>
            </NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
