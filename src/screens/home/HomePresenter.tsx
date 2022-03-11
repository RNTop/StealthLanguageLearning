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

  const homeScreenProps: IHomeScreen = {
    exerciseInfo,
  };
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
