import { Theme } from "@react-navigation/native";

const mainTheme = {
  primary: "#DAA520",
  darkBackground: "#202225",
  lightBackground: "#cccccc",
  textDark: "#cccccc",
  textLight: "#0F1D29",
  borderDark: "#4A752C",
  borderLight: "#DAA520",
  notification: "#C02425",
};

export const colors = {
  primary: mainTheme.primary,
  darkBackground: mainTheme.darkBackground,
  lightBackground: mainTheme.lightBackground,
  notification: mainTheme.notification,
  textLight: mainTheme.textLight,
  textDark: mainTheme.textDark,
  borderLight: mainTheme.borderLight,
  borderDark: mainTheme.borderDark,
};

export const colorWithOpacity = (
  colorName: keyof typeof colors,
  opacity: number
): string => {
  const color = colors[colorName];
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${opacity})`;
};

const navigationTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.primary,
    background: colors.darkBackground,
    card: colors.darkBackground,
    text: colors.textDark,
    border: colors.borderDark,
    notification: colors.notification,
  },
};

export const DarkTheme: Theme = {
  ...navigationTheme,
  colors: {
    ...mainTheme,
    background: colors.darkBackground,
    card: colors.darkBackground,
    text: colors.textDark,
    border: colors.borderDark,
    notification: colors.notification,
  },
};

export const LightTheme: Theme = {
  ...navigationTheme,
  dark: false,
  colors: {
    ...mainTheme,
    background: colors.lightBackground,
    card: colors.lightBackground,
    text: colors.textLight,
    border: colors.borderLight,
  },
};
