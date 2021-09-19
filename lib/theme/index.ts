import { extendTheme } from "@chakra-ui/react";
import "@fontsource/plus-jakarta-sans";

const colors = {};
const fonts = {
  heading: "Plus Jakarta Sans",
  body: "system-ui",
};

const theme = extendTheme({ colors, fonts });

export default theme;
