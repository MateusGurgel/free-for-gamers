import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    gg: "1.8rem"
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  colors: {
    transparent: "transparent",
    ui: '#1e2124',
    background: '#282b30',
    brand: '#8EEEF4'
  },
  space: {
    1: "0.25rem",
    4: "1rem",
    12: "3rem",
    96: "24rem",
  },
});
