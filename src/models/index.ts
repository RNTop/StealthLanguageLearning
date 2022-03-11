export * from './navigation';

export interface IExercise {
  englishSentence: string;
  germanSentence: string;
  highlight: string;
  correctWord: string;
  words: string[];
  random?: number;
}
