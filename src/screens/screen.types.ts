import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  MainScreen: {name: string};
  EditNoteScreen: {name: string; noteIndex: number};
  AddNoteScreen: {name: string};
  // AddNoteScreen: {name: string};
};

type MainRouteProp = RouteProp<RootStackParamList, 'MainScreen'>;
type EditNoteRouteProp = RouteProp<RootStackParamList, 'EditNoteScreen'>;
type AddNoteRouteProp = RouteProp<RootStackParamList, 'AddNoteScreen'>;

type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainScreen'
>;

type EditNoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditNoteScreen'
>;

type AddNoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddNoteScreen'
>;

export type MainScreenScreenProps = {
  route: MainRouteProp;
  navigation: MainScreenNavigationProp;
};

export type EditNoteScreenScreenProps = {
  route: EditNoteRouteProp;
  navigation: EditNoteScreenNavigationProp;
};
export type AddNoteScreenScreenProps = {
  route: AddNoteRouteProp;
  navigation: AddNoteScreenNavigationProp;
};
