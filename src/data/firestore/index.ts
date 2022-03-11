import firestore from '@react-native-firebase/firestore';
import {IExercise} from '../../models';
import _ from 'lodash';

export const getExercises = async () => {
  const res: any = await firestore().collection('Exercises').get();
  const exercises: IExercise[] = [];
  res.forEach((element: {data(): IExercise}) => {
    exercises.push(element.data());
  });
  return _.orderBy(
    exercises.map(i => ({
      ...i,
      random: Math.floor(Math.random() * exercises.length + 1),
    })),
    ['random'],
    ['asc'],
  );
};
