const COLOR_NAMES = {
  AMERICAN_PURPLE: '#453D6D',
  ARYLIDE_YELLOW: '#E4C56F',
  ALICE_BLUE: '#E8F2FB',
  RICH_BLACK: '#000C12',
  BEAU_BLUE: '#BFD7EE',
  RACKLEY: '#5E7F9A',
  DEEP_SPACE_SPARKLE: '#415F75',
  DEEP_RUBY: '#874A52',
  DEEP_MOSS_GREEN: '#426434',
}

const colorsConfig = {
  ...COLOR_NAMES,
  primary: COLOR_NAMES.DEEP_SPACE_SPARKLE,
  secondary: COLOR_NAMES.ARYLIDE_YELLOW,
  background: COLOR_NAMES.ALICE_BLUE,
  text: COLOR_NAMES.RICH_BLACK,
  error: COLOR_NAMES.DEEP_RUBY,
  success: COLOR_NAMES.DEEP_MOSS_GREEN,
}
export default colorsConfig
