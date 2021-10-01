import { Heading } from "@chakra-ui/react";
import NavBarContainer from "./NavBarContainer";

interface Props {}

const NavBar: React.FC<Props> = (props) => {
  return (
    <NavBarContainer {...props}>
      <Heading as="h1" fontSize="2rem">
        HeapUnderflow
      </Heading>
    </NavBarContainer>
  );
};

export default NavBar;
