import React, {useEffect} from 'react';
import {getExercises} from '../../data/firestore';
import HomeScreen, {IHomeScreen} from './HomeScreen';
import {useExercise} from './hooks';

/*
Here, please do define the contollders && handlers
*/

const HomePresenter = () => {
  const exerciseInfo = useExercise();

  useEffect(() => {
    if (!exerciseInfo.exercise) {
      exerciseInfo.setExercise(getExercises()[0]);
    }
  }, [exerciseInfo]);

  const resetExercise = () => {
    exerciseInfo.setExercise(getExercises()[1]);
  };

  const homeScreenProps: IHomeScreen = {
    exerciseInfo,
    resetExercise,
  };
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
