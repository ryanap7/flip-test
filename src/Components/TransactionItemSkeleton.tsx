import Gap from '@components/Gap';
import Skeleton from '@components/Skeleton';
import styles from '@screens/Transactions/styles';
import {GlobalStyles} from '@themes/Styles';
import {scaleSize} from '@utils/Normalize';
import React from 'react';
import {View} from 'react-native';

const TransactionItemSkeleton = React.memo(() => {
  return (
    <View
      style={[
        styles.cardSkeleton,
        GlobalStyles.rowStyle,
        GlobalStyles.justifyBetween,
      ]}>
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.rowStyle}>
          <Skeleton
            width={scaleSize(50)}
            height={scaleSize(16)}
            borderRadius={scaleSize(8)}
          />
          <Gap width={4} />
          <Skeleton
            width={scaleSize(16)}
            height={scaleSize(16)}
            borderRadius={scaleSize(8)}
          />
          <Gap width={4} />
          <Skeleton
            width={scaleSize(50)}
            height={scaleSize(16)}
            borderRadius={scaleSize(8)}
          />
        </View>
        <Gap height={4} />
        <Skeleton
          width={scaleSize(120)}
          height={scaleSize(16)}
          borderRadius={scaleSize(8)}
        />
        <Gap height={4} />
        <View style={GlobalStyles.rowStyle}>
          <Skeleton
            width={scaleSize(180)}
            height={scaleSize(16)}
            borderRadius={scaleSize(8)}
          />
        </View>
      </View>
      <Skeleton
        width={scaleSize(80)}
        height={scaleSize(24)}
        borderRadius={scaleSize(8)}
      />
    </View>
  );
});

export default TransactionItemSkeleton;
