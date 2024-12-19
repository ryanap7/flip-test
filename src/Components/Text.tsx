import {Colors} from '@themes/Colors';
import {scaleFont} from '@utils/Normalize';
import React, {memo} from 'react';
import {Platform, Text as TextRN} from 'react-native';
import {TextProps} from 'src/Types/components';

const getSize = (size: TextProps['size']) => {
  switch (size) {
    case '6xl':
      return 66;
    case '5xl':
      return 48;
    case '4xl':
      return 36;
    case '3xl':
      return 32;
    case '2xl':
      return 24;
    case 'xl':
      return 20;
    case 'lg':
      return 18;
    case 'base':
      return 16;
    case 'sm':
      return 14;
    case 'xs':
      return 12;
    default:
      return 16;
  }
};

const Text: React.FC<TextProps> = ({
  style,
  type = 'Regular',
  size = 'base',
  text,
  color = Colors['Typography-500'],
  numberOfLines,
}) => {
  const fontSize = getSize(size);
  const lineHeight = fontSize * 1.6;
  const fontFamily =
    Platform.OS === 'ios' ? `Manrope18pt-${type}` : `Manrope-${type}`;

  return (
    <TextRN
      style={[
        {
          fontSize: scaleFont(fontSize),
          color,
          lineHeight,
          fontFamily,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </TextRN>
  );
};

export default memo(Text);
