// import Logo from "@components/Logo";
import Logo from "@components/Logo";
import styled from "styled-components";
import tw from "twin.macro";
import NavItems from "./NavItems";

const NavbarContainer = styled.div`
  min-height: 4.25rem; // 68px;
  ${tw` 
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    px-4
    lg:px-12
    justify-between
  `};
`;

const LogoContainer = styled.div``;
export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
};
