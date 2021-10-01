import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../lib/theme";
import "../styles/globals.css";

import Shell from "../components/shell";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
