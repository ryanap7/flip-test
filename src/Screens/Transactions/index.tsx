import Gap from '@components/Gap';
import TransactionHeader from '@components/TransactionHeader';
import TransactionItem from '@components/TransactionItem';
import useTransactions from '@hooks/useTransactions';
import styles from '@screens/Transactions/styles';
import useTransactionStore from '@stores/useTransactionStore';
import {Colors} from '@themes/Colors';
import {GlobalStyles} from '@themes/Styles';
import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import {Transaction} from 'src/Types/data';

const ITEM_HEIGHT = 108;

const Transactions = () => {
  const {transactions, loading}: any = useTransactionStore(
    (state: any) => state,
  );

  const renderItem = useCallback(
    ({item, index}: {item: Transaction; index: number}) => (
      <TransactionItem index={index} item={item} />
    ),
    [],
  );

  const renderSeparator = useCallback(() => <Gap height={16} />, []);

  const keyExtractor = useCallback(
    (item: Transaction) => item.id.toString(),
    [],
  );

  const getItemLayout = useCallback(
    (_: unknown, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  useTransactions('https://recruitment-test.flip.id/frontend-test');

  return (
    <View style={GlobalStyles.container}>
      <TransactionHeader />
      {loading ? (
        <SafeAreaView
          style={[GlobalStyles.container, GlobalStyles.centerContent]}>
          <ActivityIndicator size="large" color={Colors['Primary-500']} />
        </SafeAreaView>
      ) : (
        <FlatList
          keyExtractor={keyExtractor}
          data={transactions}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={renderSeparator}
          getItemLayout={getItemLayout}
        />
      )}
    </View>
  );
};

export default Transactions;
