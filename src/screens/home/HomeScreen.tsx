import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import {MainContainer} from '../../components';
import {CustomButton} from '../../components/button';
import {STRINGS} from '../../constants';
import {CheckResultAnimation} from './components';
import {MissingSentence} from './components/MissingSentence';
import {PreDefinedWords} from './components/PreDefinedWords';
import {IUseExercise} from './hooks';

export interface IHomeScreen {
  loading: boolean;
  finished: boolean;
  exerciseInfo: IUseExercise;
  resetExercise: (data?: undefined) => void;
}

const HomeScreen = ({
  exerciseInfo,
  finished,
  loading,
  resetExercise,
}: IHomeScreen) => {
  return (
    <MainContainer noBottomPadding>
      {(loading || finished) && (
        <View style={styles.loading} center>
          {loading && <ActivityIndicator size={'large'} />}
          {finished && <Text h3>{STRINGS.homeScreen.successMessage}</Text>}
        </View>
      )}
      {!loading && !finished && exerciseInfo && exerciseInfo.exercise && (
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
  loading: {
    flex: 1,
  },
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
