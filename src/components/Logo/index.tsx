import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "@images/car-logo.png";

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="car" />
      </Image>
      <LogoText>Yourcar.</LogoText>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
` as any;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};

  img {
    width: auto;
    height: 100%;
  }
`;

export default Logo;
