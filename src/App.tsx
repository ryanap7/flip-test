import RootNavigations from '@navigations/RootNavigations';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalStyles} from '@themes/Styles';
import NavigationServices from '@utils/NavigationServices';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationRefType} from 'src/Types/navigations';

const App = () => {
  const navigation = useRef<NavigationRefType>(null);

  return (
    <NavigationContainer
      ref={r => {
        navigation.current = r;
        NavigationServices.setInstance(r);
      }}>
      <SafeAreaView style={GlobalStyles.container}>
        <RootNavigations />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
