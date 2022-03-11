import React, {useEffect, useState} from 'react';
import {IExercise} from '../../models';

export interface IUseExercise {
  exercise: IExercise | undefined;
  setExercise: React.Dispatch<React.SetStateAction<IExercise | undefined>>;
  selected: string | undefined;
  setSelected: React.Dispatch<string>;
  matched: boolean | undefined;
  setMatched: React.Dispatch<boolean>;
  checkAnswer: () => void;
}

export const useExercise = (): IUseExercise => {
  const [exercise, setExercise] = useState<IExercise>();
  const [selected, setSelected] = useState<string>();
  const [matched, setMatched] = useState<boolean>();

  useEffect(() => {
    setSelected(undefined);
    setMatched(undefined);
  }, [exercise]);

  const checkAnswer = () => {
    setMatched(selected === exercise?.correctWord);
  };
  return {
    exercise,
    setExercise,
    selected,
    setSelected,
    matched,
    setMatched,
    checkAnswer,
  };
};
