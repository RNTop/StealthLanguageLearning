import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, View} from 'react-native-ui-lib';

interface IMainContainer {
  children: React.ReactNode;
  noBottomPadding?: boolean;
}

export const MainContainer = ({
  children,
  noBottomPadding = false,
}: IMainContainer) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        !noBottomPadding && {paddingBottom: insets.bottom},
      ]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.background}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
