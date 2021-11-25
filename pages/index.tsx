import type { NextPage } from "next";
import { Divider, Heading, Flex, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Flex w="90%" pb={3} justifyContent="space-between">
        <Heading fontSize={28}>Top Snippets</Heading>
        <Link passHref href="/snippets/add">
          <Button>Add Snippet</Button>
        </Link>
      </Flex>
      <Divider w="50%" />
      <p>this is very poggers.</p>
    </>
  );
};

export default Home;
