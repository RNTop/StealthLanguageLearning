import React, {useCallback, useEffect, useState} from 'react';
import {getExercises} from '../../data/firestore';
import {IExercise} from '../../models';
import HomeScreen, {IHomeScreen} from './HomeScreen';
import {IUseExercise, useExercise} from './hooks';

const HomePresenter = () => {
  const exerciseInfo: IUseExercise = useExercise();
  const {setExercise: setCurrentExercise} = exerciseInfo;
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [finished, setFinished] = useState<boolean>(false);

  const resetExercise = useCallback(
    (data: IExercise[] | undefined) => {
      const remainExercises = data ? data : exercises;
      if (remainExercises.length) {
        setCurrentExercise(remainExercises[0]);
        setExercises(
          remainExercises.filter(
            i => i.englishSentence !== remainExercises[0].englishSentence,
          ),
        );
      } else {
        setFinished(true);
      }
    },
    [exercises, setCurrentExercise],
  );

  useEffect(() => {
    let isMounted = true;
    const fetchExercises = async () => {
      if (isMounted && loading) {
        const response = await getExercises();
        resetExercise(response);
        setLoading(false);
      }
    };
    fetchExercises();
    return () => {
      isMounted = false;
    };
  }, [resetExercise, loading]);

  const homeScreenProps: IHomeScreen = {
    loading,
    finished,
    exerciseInfo,
    resetExercise,
  };
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
