import RootNavigations from '@navigations/RootNavigations';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigations />
    </NavigationContainer>
  );
};

export default App;
