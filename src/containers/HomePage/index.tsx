import styled from "styled-components";

import tw from "twin.macro";

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
  return <PageContainer></PageContainer>;
};

export default HomePage;
