import { BookCard } from "@components/bookCard";
import styled from "styled-components";

import tw from "twin.macro";
import TopSection from "./TopSection";

interface Props {}

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col  
  h-full
  items-center
  overflow-x-hidden
  w-full
  `}
`;

const HomePage = (props: Props) => {
  return (
    <PageContainer>
      <TopSection />
      <BookCard />
    </PageContainer>
  );
};

export default HomePage;
