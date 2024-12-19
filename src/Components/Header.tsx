import IcChevronLeft from '@assets/Icons/IcChevronLeft';
import Text from '@components/Text';
import {Colors} from '@themes/Colors';
import {GlobalStyles} from '@themes/Styles';
import NavigationServices from '@utils/NavigationServices';
import {scaleSize} from '@utils/Normalize';
import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Header = () => {
  const onBack = useCallback(() => {
    NavigationServices.pop();
  }, []);

  return (
    <View style={[styles.header, GlobalStyles.rowStyle]}>
      <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
        <IcChevronLeft />
      </TouchableOpacity>
      <View style={GlobalStyles.container}>
        <Text
          type="Bold"
          text="Detail Transaksi"
          color={Colors['Typography-900']}
          style={GlobalStyles.centerContent}
        />
      </View>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  header: {
    padding: scaleSize(16),
    borderBottomWidth: 0.4,
    borderBottomColor: Colors['Gray-500'],
  },
});
