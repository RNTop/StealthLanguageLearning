import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {IUseExercise} from '../hooks';

interface IPreDefinedWords {
  exerciseInfo: IUseExercise;
}

export const PreDefinedWords = ({exerciseInfo}: IPreDefinedWords) => {
  return (
    <View style={styles.conatiner}>
      {exerciseInfo.exercise?.words.map(i => {
        const selected = exerciseInfo.selected === i;
        return (
          <TouchableOpacity
            key={i}
            bg-white
            style={[styles.item, selected && {backgroundColor: Colors.button}]}
            onPress={() => {
              exerciseInfo.setSelected(i);
            }}>
            <Text color={selected ? Colors.transparent : Colors.darkGreen} h5>
              {i}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  item: {
    paddingHorizontal: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
