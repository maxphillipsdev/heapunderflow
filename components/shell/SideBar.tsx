import { Box, Button, VStack, StackDivider } from "@chakra-ui/react";
import Link from "next/link";

interface Props {}

const SideBar: React.FC<Props> = (props) => {
  return (
    <VStack ml={3} spacing={3}>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </VStack>
  );
};

export default SideBar;
