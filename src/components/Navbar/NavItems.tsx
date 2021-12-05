import styled, { css } from "styled-components";
import tw from "twin.macro";
// import error fix in src/typings/react-burger-menu.d.ts
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "@components/responsive";
import menuStyles from "./menuStyles";
import { navItemsLinksArray } from "./navItemsLinksArray";
/***********
 * STYLING *
 ***********/
const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

const NavItemsMobile = ({ navLinks }: any) => (
  <Menu right styles={menuStyles}>
    <ListContainer>
      {navLinks.map(({ href, label }: { href: string; label: string }) => (
        <NavItem menu key={label}>
          <a href={href}>{label}</a>
        </NavItem>
      ))}
    </ListContainer>
  </Menu>
);
const NavItemsDesktop = ({ navLinks }: any) => {
  return (
    <ListContainer>
      {navLinks.map(({ href, label }: { href: string; label: string }) => (
        <NavItem key={label}>
          <a href={href}>{label}</a>
        </NavItem>
      ))}
    </ListContainer>
  );
};

const NavItems = () => {
  const isMobile = !useMediaQuery({ minWidth: SCREENS.sm });
  return isMobile ? (
    <NavItemsMobile navLinks={navItemsLinksArray} />
  ) : (
    <NavItemsDesktop navLinks={navItemsLinksArray} />
  );
};

export default NavItems;
