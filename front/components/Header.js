import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import CartIcon from "./icons/CartIcon";
import Button from "./Button";
import randomcolor from "randomcolor";
import { useRouter } from "next/router";

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
    /* Change the border-bottom color on hover */
    background-color: #ddd;
    color:#000;
    border-radius: 5px;
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
              <Button
                warning
                outline
                size="l"
                style={{ color: buttonColor, borderColor: buttonColor }}
              >
                <CartIcon />
                Cart ({cartProducts.length})
              </Button>
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
