import {
  createTheme,
  DEFAULT_THEME,
  type MantineThemeColors,
  type MantineBreakpointsValues,
} from "@mantine/core";

export const theme = createTheme({
  ...DEFAULT_THEME,
  fontFamily: "var(--font-geist-sans)",
  fontFamilyMonospace: "var(--font-geist-mono)",
  headings: { fontFamily: "var(--font-geist-sans)", textWrap: "balance" },
  fontSmoothing: true,
});
export const colors: MantineThemeColors = DEFAULT_THEME.colors;
export const breakpoints: MantineBreakpointsValues = DEFAULT_THEME.breakpoints;
