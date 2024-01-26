const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  neutral: {
    100: "#EFEFEF",
    200: "#848484",
    300: "#333333",
  },
  green: {
    100: "#6BEFA3",
    200: "#5AAD7D",
  },
  purple: "#8666EF",
  pink: "#DD7AC6",
  orange: "#FFAB64",
};

const font = {
  family: "Inter",
  sizes: {
    ssm: "0.625rem", //10px
    sm: "0.875rem", //14px
    md: "1rem", //16px
    lg: "1.5rem", //24px
    xl: "1.875", //30px
    xxl: "2.5rem", //40px
  },
};

export const themeDefault = {
  colors: {
    ...colors,
    background: colors.white,
  },
  font,
};
