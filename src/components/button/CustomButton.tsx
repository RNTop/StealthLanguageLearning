import React, {useState} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Colors, Typography, View} from 'react-native-ui-lib';
import {DIMENSIONS} from '../../constants';

const buttonWidth = DIMENSIONS.width - 48;
const buttonHeight = 56;
const shrinkDistance = 4;

interface ICustomButton {
  onPress?: () => void;
  name?: string;
  style?: ViewStyle;
  width?: number;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
}
export const CustomButton = ({
  name = 'Continue',
  onPress,
  style,
  width = buttonWidth,
  bgColor = Colors.success,
  textColor = Colors.white,
  disabled,
}: ICustomButton) => {
  const [pressed, setPressed] = useState(false);
  const insets = useSafeAreaInsets();
  return (
    <View
      center
      width={width}
      height={buttonHeight}
      style={[
        styles.buttonContainer,
        {
          padding: (pressed && shrinkDistance) || 0,
          marginBottom: insets.bottom + 20,
        },
      ]}>
      <Button
        label={name}
        labelStyle={[Typography.button, {color: textColor}]}
        style={[styles.button, style]}
        backgroundColor={bgColor}
        disabledBackgroundColor={Colors.button}
        onPress={onPress}
        onPressIn={() => {
          setPressed(true);
        }}
        onPressOut={() => {
          setPressed(false);
        }}
        activeOpacity={1}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {alignSelf: 'center'},
  button: {
    width: '100%',
    height: '100%',
  },
});
