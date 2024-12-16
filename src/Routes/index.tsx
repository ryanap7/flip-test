import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailTransaction from '../Screens/DetailTransaction';
import Transactions from '../Screens/Transactions';

const Stack = createNativeStackNavigator();

const Routers = () => {
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

export default Routers;
