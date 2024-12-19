import RootNavigations from '@navigations/RootNavigations';
import {NavigationContainer} from '@react-navigation/native';
import NavigationServices from '@utils/NavigationServices';
import React, {useRef} from 'react';
import {NavigationRefType} from 'src/Types/navigations';

const App = () => {
  const navigation = useRef<NavigationRefType>(null);

  return (
    <NavigationContainer
      ref={r => {
        navigation.current = r;
        NavigationServices.setInstance(r);
      }}>
      <RootNavigations />
    </NavigationContainer>
  );
};

export default App;
