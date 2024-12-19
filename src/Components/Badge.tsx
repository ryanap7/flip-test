import Text from '@components/Text';
import {Colors} from '@themes/Colors';
import {scaleSize} from '@utils/Normalize';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Badge = React.memo(({status}: {status: string}) => {
  const message = status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';
  const messageColor =
    status === 'SUCCESS' ? Colors.White : Colors['Typography-900'];
  const backgroundColor =
    status === 'SUCCESS' ? Colors['Success-500'] : Colors.White;
  const borderColor =
    status === 'SUCCESS' ? Colors['Success-500'] : Colors['Orange-500'];

  const badgeStyles = [
    styles.badge,
    {
      backgroundColor,
      borderColor,
    },
  ];

  return (
    <View style={badgeStyles}>
      <Text type="Bold" size="xs" text={message} color={messageColor} />
    </View>
  );
});

export default Badge;

const styles = StyleSheet.create({
  badge: {
    paddingVertical: scaleSize(4),
    paddingHorizontal: scaleSize(8),
    borderRadius: scaleSize(6),
    borderWidth: scaleSize(1),
  },
});
