import React from 'react';
import { Text } from 'react-native-ui-lib';
import { MainContainer } from '../../components';

export interface IHomeScreen {
  
}

const HomeScreen = (props: IHomeScreen) => {
  
  return (
    <MainContainer>
      <Text h1 >Home Screen</Text>
    </MainContainer>
  );
};

export default HomeScreen;
