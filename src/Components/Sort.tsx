import IcSort from '@assets/Icons/IcSort';
import Modal from '@components/Modal';
import Text from '@components/Text';
import useTransactionStore, {SortOption} from '@stores/useTransactionStore';
import {Colors} from '@themes/Colors';
import {GlobalStyles} from '@themes/Styles';
import {scaleSize} from '@utils/Normalize';
import React, {useCallback, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Sort: React.FC = () => {
  const {sortOption, setSortOption}: any = useTransactionStore(
    (state: any) => state,
  );
  const ref = useRef<any>(null);

  const onClick = useCallback(() => {
    ref?.current?.show();
  }, []);

  const handleSortOptionSelect = (option: string) => {
    ref?.current?.hide();
    setTimeout(() => {
      setSortOption(option);
    }, 200);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.wrapper, GlobalStyles.centerContent]}
        onPress={onClick}>
        <IcSort />
      </TouchableOpacity>

      <Modal ref={ref}>
        <View>
          {Object.values(SortOption).map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSortOptionSelect(option)}>
              <Text
                type={sortOption === option ? 'SemiBold' : 'Regular'}
                text={option}
                color={
                  sortOption === option
                    ? Colors['Primary-500']
                    : Colors['Typography-500']
                }
                style={styles.options}
              />
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </>
  );
};

export default Sort;

const styles = StyleSheet.create({
  wrapper: {
    width: scaleSize(48),
    height: scaleSize(48),
    backgroundColor: Colors['Primary-50'],
    borderRadius: scaleSize(8),
  },
  options: {
    paddingVertical: scaleSize(8),
  },
});
