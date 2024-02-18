const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
// main color
const mainColor = "#4d2f41"
const secondaryColor = "#fb84c6"
export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    headerBack: secondaryColor,
    mainColor,
    secondaryColor,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    headerBack: mainColor,
    mainColor,
    secondaryColor,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
