import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Colors, Text} from 'react-native-ui-lib';
import {CustomButton} from '../../../components/button';
import {IUseExercise} from '../hooks';

interface ICheckResultAnimation {
  exerciseInfo: IUseExercise;
  resetExercise: () => void;
}

export const CheckResultAnimation = ({
  exerciseInfo,
  resetExercise,
}: ICheckResultAnimation) => {
  const {matched} = exerciseInfo;
  const bottom = useRef(new Animated.Value(0)).current;

  const showAnimation = useCallback(() => {
    Animated.spring(bottom, {
      toValue: -200,
      useNativeDriver: true,
    }).start();
  }, [bottom]);

  const hideAnimation = useCallback(() => {
    Animated.spring(bottom, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, [bottom]);

  useEffect(() => {
    if (matched !== undefined) {
      showAnimation();
    } else {
      hideAnimation();
    }
  }, [matched, showAnimation, hideAnimation]);

  const color =
    (matched === true && Colors.success) ||
    (matched === false && Colors.error) ||
    Colors.transparent;
  return (
    <Animated.View
      style={[
        styles.conatiner,
        {backgroundColor: color, transform: [{translateY: bottom}]},
      ]}>
      <Text marginL-24 white h4 marginB-24>
        {matched
          ? 'Great Job!'
          : `Answer: ${exerciseInfo.exercise?.correctWord}`}
      </Text>
      <CustomButton
        onPress={() => {
          resetExercise();
        }}
        bgColor={Colors.white}
        textColor={color}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    position: 'absolute',
    bottom: -200,
    paddingTop: 24,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
