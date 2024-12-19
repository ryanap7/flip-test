import {Platform} from 'react-native';

export const Fonts = {
  BOLD: Platform.OS === 'ios' ? 'Manrope18pt-Bold' : 'Manrope-Bold',
  LIGHT: Platform.OS === 'ios' ? 'Manrope18pt-Light' : 'Manrope-Light',
  MEDIUM: Platform.OS === 'ios' ? 'Manrope18pt-Medium' : 'Manrope-Medium',
  REGULAR: Platform.OS === 'ios' ? 'Manrope18pt-Regular' : 'Manrope-Regular',
  SEMIBOLD: Platform.OS === 'ios' ? 'Manrope18pt-SemiBold' : 'Manrope-SemiBold',
} as const;

export type FontName = keyof typeof Fonts;
