import { extendTheme } from "@chakra-ui/react";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

const switchColorScheme = "#06BEE1";

export const space = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

export const colors = {
  primary: "#3c3f63",
  white: "#FFFFFF",
  secondary: "#d87e79",
  accent: "#FF8484",
  purple: "#533A7B",
  selectedSwitch: {
    50: switchColorScheme,
    100: switchColorScheme,
    200: switchColorScheme,
    300: switchColorScheme,
    400: switchColorScheme,
    500: switchColorScheme,
    600: switchColorScheme,
    700: switchColorScheme,
    800: switchColorScheme,
    900: switchColorScheme,
  },
  selected: "#0066FF",
  "selected-alt": "#15FDC0",
  error: "#FF5050",
  link: "#40a9ff",
  border: "#353945",
};

const components = {
  Text: {
    variants: {
      primary: {
        color: colors.primary,
      },
    },
    secondary: {
      color: colors.secondary,
    },
    body: {
      color: colors.accent,
    },
  },
};

const layerStyles = {
  gradient: {
    background:
      "linear-gradient(71deg, rgba(0, 0, 0, 0.325) 44.24%, rgba(95, 99, 101, 0.0014453) 71.79%)",
  },
  card: {
    overflow: "hidden",
    borderRadius: "lg",
  },
  pill: {
    height: "30px",
    borderRadius: "2xl",
    bg: "accent",
    color: "primaryText.light",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "xs",
    px: 4,
    py: 2,
  },
  coverImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  },
  outlined: {
    borderRadius: "lg",
    borderColor: "border",
    borderWidth: "1px",
    borderStyle: "solid",
  },
};

const TEXT_MARGIN = "0 0 1em 0 !important";

const radii = {
  none: "0",
  sx: "1px",
  sm: "2px",
  md: "4px",
  lg: "6px",
  xl: "12px",
  "2xl": "24px",
  "3xl": "90px",
};

export const theme = extendTheme({
  global: {
    "#root": {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
  },
  colors,
  layerStyles,
  //   config,
  radii,
  space,
  components,
});
