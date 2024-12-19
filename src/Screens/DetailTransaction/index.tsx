import IcArrowRight from '@assets/Icons/IcArrowRight';
import Gap from '@components/Gap';
import Header from '@components/Header';
import Text from '@components/Text';
import styles from '@screens/DetailTransaction/styles';
import {Colors} from '@themes/Colors';
import {GlobalStyles} from '@themes/Styles';
import {formatBankName, formatDate, formatRupiah} from '@utils/Helpers';
import React from 'react';
import {View} from 'react-native';

const DetailRow = ({label = '', value = ''}) => (
  <View style={GlobalStyles.container}>
    <Text type="Bold" text={label} color={Colors['Typography-900']} />
    <Text type="SemiBold" text={value} color={Colors['Typography-900']} />
  </View>
);

const DetailTransaction = ({route}: any) => {
  const {item} = route.params;

  return (
    <View style={GlobalStyles.container}>
      <Header />
      <View style={styles.container}>
        <View style={GlobalStyles.rowStyle}>
          <Text
            type="Bold"
            size="lg"
            text={formatBankName(item.sender_bank)}
            color={Colors['Typography-900']}
          />
          <Gap width={4} />
          <IcArrowRight />
          <Gap width={4} />
          <Text
            type="Bold"
            size="lg"
            text={formatBankName(item.beneficiary_bank)}
            color={Colors['Typography-900']}
          />
        </View>

        <Gap height={24} />
        <View style={[GlobalStyles.rowStyle, GlobalStyles.justifyBetween]}>
          <DetailRow
            label={item.beneficiary_name.toUpperCase()}
            value={item.account_number}
          />
          <DetailRow label="NOMINAL" value={formatRupiah(item.amount)} />
        </View>
        <Gap height={16} />

        <View style={[GlobalStyles.rowStyle, GlobalStyles.justifyBetween]}>
          <DetailRow label="BERITA TRANSFER" value={item.remark} />
          <DetailRow label="KODE UNIK" value={item.unique_code} />
        </View>

        <Gap height={16} />

        <View style={GlobalStyles.rowStyle}>
          <DetailRow label="WAKTU DIBUAT" value={formatDate(item.created_at)} />
        </View>
      </View>
    </View>
  );
};

export default DetailTransaction;
