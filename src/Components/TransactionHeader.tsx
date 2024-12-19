import Gap from '@components/Gap';
import Input from '@components/Input';
import Sort from '@components/Sort';
import styles from '@screens/Transactions/styles';
import useTransactionStore from '@stores/useTransactionStore';
import {GlobalStyles} from '@themes/Styles';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

const TransactionHeader: React.FC = React.memo(() => {
  const {searchQuery, setSearchQuery}: any = useTransactionStore(
    (state: any) => state,
  );
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    setSearchQuery(localSearchQuery);
  }, [localSearchQuery, setSearchQuery]);

  const handleInputChange = (text: string) => {
    setLocalSearchQuery(text);
  };

  return (
    <View
      style={[
        styles.container,
        GlobalStyles.rowStyle,
        GlobalStyles.justifyBetween,
      ]}>
      <Input
        placeholder="Cari nama, bank, atau nominal"
        value={localSearchQuery}
        onChangeText={handleInputChange}
      />
      <Gap width={8} />
      <Sort />
    </View>
  );
});

export default TransactionHeader;
