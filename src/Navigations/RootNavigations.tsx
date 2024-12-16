import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailTransaction from '@screens/DetailTransaction';
import Transactions from '@screens/Transactions';
import React from 'react';

const Stack = createNativeStackNavigator();

const RootNavigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        freezeOnBlur: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="DetailTransaction" component={DetailTransaction} />
    </Stack.Navigator>
  );
};

export default RootNavigations;
