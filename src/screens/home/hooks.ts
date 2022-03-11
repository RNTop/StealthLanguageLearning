import React, {useState} from 'react';
import {IExercise} from '../../models';

export interface IUseExercise {
  exercise: IExercise | undefined;
  setExercise: React.Dispatch<React.SetStateAction<IExercise | undefined>>;
  selected: string | undefined;
  setSelected: React.Dispatch<string>;
}

export const useExercise = (): IUseExercise => {
  const [exercise, setExercise] = useState<IExercise>();
  const [selected, setSelected] = useState<string>();
  return {
    exercise,
    setExercise,
    selected,
    setSelected,
  };
};
