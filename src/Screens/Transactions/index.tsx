import Gap from '@components/Gap';
import Text from '@components/Text';
import TransactionHeader from '@components/TransactionHeader';
import TransactionItem from '@components/TransactionItem';
import TransactionItemSkeleton from '@components/TransactionItemSkeleton';
import useTransactions from '@hooks/useTransactions';
import styles from '@screens/Transactions/styles';
import useTransactionStore from '@stores/useTransactionStore';
import {Colors} from '@themes/Colors';
import {GlobalStyles} from '@themes/Styles';
import {scaleSize} from '@utils/Normalize';
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {Transaction} from 'src/Types/data';

const ITEM_HEIGHT = 108;

const Transactions = () => {
  const {refreshTransactions} = useTransactions(
    'https://recruitment-test.flip.id/frontend-test',
  );
  const {transactions, loading}: any = useTransactionStore(
    (state: any) => state,
  );

  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(
    ({item, index}: {item: Transaction; index: number}) => (
      <TransactionItem index={index} item={item} />
    ),
    [],
  );

  const renderEmptyState = useCallback(
    () => (
      <View
        style={[
          GlobalStyles.container,
          GlobalStyles.centerContent,
          {marginTop: scaleSize(324)},
        ]}>
        <Text text="Tidak ada data" />
      </View>
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshTransactions().finally(() => setRefreshing(false));
  }, [refreshTransactions]);

  return (
    <View style={GlobalStyles.container}>
      <TransactionHeader />
      {loading ? (
        <View style={styles.container}>
          {[...Array(8)].map((_, index) => (
            <TransactionItemSkeleton key={index} />
          ))}
        </View>
      ) : (
        <FlatList
          keyExtractor={keyExtractor}
          data={transactions}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={renderSeparator}
          getItemLayout={getItemLayout}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors['Primary-500']]}
            />
          }
          ListEmptyComponent={renderEmptyState}
        />
      )}
    </View>
  );
};

export default Transactions;
