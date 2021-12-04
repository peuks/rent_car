import "./index.css";
import styled from "styled-components";
import tw from "twin.macro";
import HomePage from "./containers/HomePage/index";
import { Navbar } from "./components/Navbar";
interface Props {}

const AppContainer = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
`}
`;
const App = (props: Props) => {
  return (
    <AppContainer>
      <Navbar />
      <HomePage />
    </AppContainer>
  );
};

export default App;
