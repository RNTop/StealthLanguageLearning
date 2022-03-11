import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import {MainContainer} from '../../components';
import {CustomButton} from '../../components/button';
import {STRINGS} from '../../constants';
import {CheckResultAnimation} from './components';
import {MissingSentence} from './components/MissingSentence';
import {PreDefinedWords} from './components/PreDefinedWords';
import {IUseExercise} from './hooks';

export interface IHomeScreen {
  exerciseInfo: IUseExercise;
  resetExercise: () => void;
}

const HomeScreen = ({exerciseInfo, resetExercise}: IHomeScreen) => {
  return (
    <MainContainer noBottomPadding>
      {exerciseInfo.exercise && (
        <View style={styles.main} bg-cardBg>
          <View style={styles.top}>
            <Text small white center>
              {STRINGS.homeScreen.description}
            </Text>
            <Text
              white
              center
              style={styles.englishSentence}
              highlightString={exerciseInfo.exercise.highlight}
              highlightStyle={styles.highlightStyle}>
              {exerciseInfo.exercise.englishSentence}
            </Text>
            <MissingSentence exerciseInfo={exerciseInfo} />
            <PreDefinedWords exerciseInfo={exerciseInfo} />
          </View>
          <CustomButton
            disabled={exerciseInfo.selected ? false : true}
            name={
              exerciseInfo.selected
                ? STRINGS.button.checkAnswer
                : STRINGS.button.continue
            }
            onPress={exerciseInfo.checkAnswer}
          />
          <CheckResultAnimation
            exerciseInfo={exerciseInfo}
            resetExercise={resetExercise}
          />
        </View>
      )}
    </MainContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 70,
    paddingTop: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  top: {
    display: 'flex',
    flexGrow: 1,
  },
  englishSentence: {
    fontSize: 24,
    marginVertical: 20,
  },
  highlightStyle: {
    fontSize: 24,
    marginVertical: 20,
    color: Colors.white,
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
});
