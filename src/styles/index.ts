import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",

      gray900: "#121214",
      gray800: "#202024",
      gray500: "#d9d9d9",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",
    },

    fontSizes: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
    },
  },
});
