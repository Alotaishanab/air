const Colors: Record<ColorThemeName, ThemeColors> = {
  light: {
    white: "#FFFFFF",
    headerColor: "#3C4858", // Dark Slate
    appColor: "#2C3E50", // Midnight Blue
    nameColor: "#607D8B", // Blue Gray
    background: '#E0E0E0', // Whisper
    desColor: "#7A919D", // Ligh Slate Gray
    authTitleColor: "#2C3E50", // Midnight Blue
    inputColor: "#5D6D7E", // Roman Silver
    iconColor: "#607D8B", // Blue Gray
    forgotColor: "#2C3E50", // Midnight Blue
    loginButtonColor: "#ECF0F1", // Clouds
    colorBorder: "#BDC3C7", // Silver Sand
    orColor: "#34495E", // Blue Yonder
    loginColor: "#2C3E50", // Midnight Blue
    dontHaveColor: "#34495E", // Blue Yonder
    pinColor: "#3C4858", // Dark Slate
    listColor: "#ECF0F1", // Clouds
    listBorder: '#AEB6BF', // Blue Smoke
    infoColor: "#607D8B", // Blue Gray
    termsColor: "#3C4858", // Dark Slate
    green: "#2ECC71", // Emerald
    playColor: "#2C3E50", // Midnight Blue
    arrowColor: "#3C4858", // Dark Slate
    dayColor: "#34495E", // Blue Yonder
    monthColor: "#2C3E50", // Midnight Blue
    textDisabled: '#BDC3C7', // Silver Sand
    disabledArrowColor: '#BDC3C7', // Silver Sand
    indicatorColor: '#2C3E50', // Midnight Blue
    calenderBackground: "#E6EAF4", // Soft Pastel Blue
    accent: "#3498DB", // Peter River
  },
  dark: {
    // Assuming the dark theme is an inversion of the light for high contrast
    white: "#EAECEE", // Whisper
    headerColor: "#D6DBDF", // Ligh Gray
    appColor: "#ABB2B9", // Dark Gray
    nameColor: "#95A5A6", // Cadet Blue
    background: '#2C3E50', // Midnight Blue
    desColor: "#566573", // Independence
    authTitleColor: "#EAECEE", // Whisper
    inputColor: "#7B8D93", // Slate Gray
    iconColor: "#95A5A6", // Cadet Blue
    forgotColor: "#ABB2B9", // Dark Gray
    loginButtonColor: "#566573", // Independence
    colorBorder: "#515A5A", // Ebony
    orColor: "#EAECEE", // Whisper
    loginColor: "#ABB2B9", // Dark Gray
    dontHaveColor: "#D6DBDF", // Light Gray
    pinColor: "#ABB2B9", // Dark Gray
    listColor: '#2C3E50', // Midnight Blue
    listBorder: '#34495E', // Blue Yonder
    infoColor: "#ABB2B9", // Dark Gray
    termsColor: "#D6DBDF", // Light Gray
    green: "#27AE60", // Nephritis
    playColor: "#95A5A6", // Cadet Blue
    arrowColor: "#ABB2B9", // Dark Gray
    dayColor: "#ABB2B9", // Dark Gray
    monthColor: "#EAECEE", // Whisper
    textDisabled: '#7B8D93', // Slate Gray
    disabledArrowColor: '#7B8D93', // Slate Gray
    indicatorColor: '#95A5A6', // Cadet Blue
    calenderBackground: "#394D70", // Muted Dark Blue
    accent: "#2980B9", // Belize Hole
  },
}

export default Colors;

export type ThemeColors = {
  text: string | undefined;
  disabledText: string;
  disabledArrowColor: string;
  indicatorColor: string;
  white: string;
  headerColor: string;
  appColor: string;
  nameColor: string;
  background: string;
  desColor: string;
  authTitleColor: string;
  inputColor: string;
  iconColor: string;
  forgotColor: string;
  loginButtonColor: string;
  colorBorder: string;
  orColor: string;
  loginColor: string;
  dontHaveColor: string;
  pinColor: string;
  listColor: string;
  listBorder: string;
  infoColor: string;
  termsColor: string;
  green: string;
  playColor: string;
  arrowColor: string;
  dayColor: string;
  monthColor: string;
  calenderBackground: string;
  textDisabled: string;
  accent: string;
};

export type ColorThemeName = 'light' | 'dark';