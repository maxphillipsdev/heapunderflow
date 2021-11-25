import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../lib/theme";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";

import Shell from "../components/shell";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Shell>
            <Component {...pageProps} />
          </Shell>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
export default MyApp;
