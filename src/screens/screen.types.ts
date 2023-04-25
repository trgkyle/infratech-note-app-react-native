import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  MainScreen: {name: string};
  AddNote: {name: string};
};

type NoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainScreen'
>;

export type NoteScreenProps = {
  navigation: NoteScreenNavigationProp;
};
