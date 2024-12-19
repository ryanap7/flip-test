import {ViewStyle, TextStyle} from 'react-native';

export interface GlobalStylesType {
  shadowStyle: ViewStyle;
  container: ViewStyle;
  rowStyle: ViewStyle;
  justifyBetween: ViewStyle;
  centerContent: ViewStyle & TextStyle;
  selfAligned: ViewStyle;
}
