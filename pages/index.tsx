import type { NextPage } from "next";
import { Divider, Heading, Flex, Button, HStack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Flex w="50%" pb={3} justifyContent="space-between">
        <Heading fontSize={28}>Top Solutions</Heading>
        <Link passHref href="/solutions/add">
          <Button>Add Solution</Button>
        </Link>
      </Flex>
      <Divider w="50%" />
      <p>this is very poggers.</p>
    </>
  );
};

export default Home;
