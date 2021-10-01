import { Box, HStack, Stack } from "@chakra-ui/layout";
import { StackDivider } from "@chakra-ui/react";
import NavBar from "./NavBar";
import NavBarContainer from "./NavBarContainer";
import SideBar from "./SideBar";

interface Props {}

const Shell: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <HStack
        divider={<StackDivider />}
        spacing={4}
        w="100%"
        h="80%"
        justifyContent="start"
      >
        <Box w="20%" h="100%" as="aside">
          <SideBar />
        </Box>
        <Box w="80%" h="100%" as="main">
          {children}
        </Box>
      </HStack>
    </>
  );
};

export default Shell;
