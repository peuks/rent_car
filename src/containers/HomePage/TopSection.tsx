import { SCREENS } from "@components/responsive";
import blob from "@images/blob.svg";
import miniFrigo from "@images/miniFrigo.png";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "@components/button/";

const TopSectionContainer = styled.div`
  ${tw`
    mt-[6em]
    min-h-[25rem]
    w-full
    max-w-screen-2xl
    flex
    justify-between
    px-3
    lg:px-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;
const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;
const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: 100%;
    height: auto;
    max-width: fit-content;
    object-fit: cover;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;
const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Louez votre frigo en toute sérénité</Slogan>
        <Description>
          Le plus large choix de toute la côte Est disponible de suite dans nos
          magasins But ou en commandant en ligne au meilleur prix. Obtenez la
          meilleure qualité aussi longtemps que vous le souhaitez !
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={blob} alt="Blob" />
        </BlobContainer>
        <StandaloneCar>
          <img src={miniFrigo} alt="Mini Frigo" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
