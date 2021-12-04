import Logo from "components/Logo";
import styled from "styled-components";
import tw from "twin.macro";

const NavbarContainer = styled.div`
  min-height: 4.25rem; // 68px
  ${tw`
w-full
max-w-screen-2xl
flex
flex-row
items-center
lg:pl-12
lg:pr-12
justify-center
  `};
`;

const LogoContainer = styled.div``;
export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </NavbarContainer>
  );
};
