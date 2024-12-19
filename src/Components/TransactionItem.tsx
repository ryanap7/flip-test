import IcArrowRight from '@assets/Icons/IcArrowRight';
import Badge from '@components/Badge';
import Gap from '@components/Gap';
import Text from '@components/Text';
import styles from '@screens/Transactions/styles';
import { Colors } from '@themes/Colors';
import { GlobalStyles } from '@themes/Styles';
import { formatBankName, formatDate, formatRupiah } from '@utils/Helpers';
import React from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Transaction } from 'src/Types/data';

const TransactionItem = React.memo(
  ({item, index}: {item: Transaction; index: number}) => {
    const attColor =
      item.status === 'SUCCESS' ? Colors['Success-500'] : Colors['Orange-500'];

    return (
      <Animated.View
        entering={FadeInDown.delay(100 * index).duration(500)}
        style={[
          styles.card,
          GlobalStyles.rowStyle,
          GlobalStyles.justifyBetween,
          GlobalStyles.shadowStyle,
        ]}>
        <View
          style={[
            styles.att,
            {
              backgroundColor: attColor,
            },
          ]}
        />
        <View style={GlobalStyles.container}>
          <View style={GlobalStyles.rowStyle}>
            <Text
              type="Bold"
              size="sm"
              text={formatBankName(item.sender_bank)}
              color={Colors['Typography-900']}
            />
            <Gap width={4} />
            <IcArrowRight />
            <Gap width={4} />
            <Text
              type="Bold"
              size="sm"
              text={formatBankName(item.beneficiary_bank)}
              color={Colors['Typography-900']}
            />
          </View>
          <Text
            type="Medium"
            size="xs"
            text={item.beneficiary_name.toUpperCase()}
          />
          <View style={GlobalStyles.rowStyle}>
            <Text
              type="Bold"
              size="xs"
              text={formatRupiah(item.amount)}
              color={Colors['Typography-900']}
            />
            <Gap width={4} />
            <View style={styles.dot} />
            <Gap width={4} />
            <Text
              type="Bold"
              size="xs"
              text={formatDate(item.created_at)}
              color={Colors['Typography-900']}
            />
          </View>
        </View>
        <Badge status={item.status} />
      </Animated.View>
    );
  },
);

export default TransactionItem;
