import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import {parseGermanWords} from '../../../utils';
import {IUseExercise} from '../hooks';

interface IMissingSentence {
  exerciseInfo: IUseExercise;
}

export const MissingSentence = ({exerciseInfo}: IMissingSentence) => {
  return (
    <View style={styles.conatiner}>
      {exerciseInfo.exercise &&
        parseGermanWords(exerciseInfo.exercise.germanSentence).map(i => {
          const {matched, selected} = exerciseInfo;
          if (i === '@word') {
            if (selected) {
              return (
                <View
                  key={i}
                  style={styles.itemSelected}
                  backgroundColor={
                    (matched === true && Colors.success) ||
                    (matched === false && Colors.error) ||
                    Colors.white
                  }>
                  <Text
                    h5
                    darkGreen={matched === undefined}
                    white={matched !== undefined}>
                    {selected}
                  </Text>
                </View>
              );
            }
            return (
              <View key={i} style={styles.itemBlank}>
                <Text transparent style={styles.itemTxt}>
                  {exerciseInfo.exercise?.correctWord}
                </Text>
              </View>
            );
          }
          return (
            <View key={i} style={styles.item}>
              <Text white style={styles.itemTxt}>
                {i}
              </Text>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginHorizontal: 3,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  itemBlank: {
    marginHorizontal: 3,
    paddingHorizontal: 15,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  itemSelected: {
    paddingHorizontal: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginHorizontal: 10,
  },
  itemTxt: {
    fontSize: 24,
  },
});
