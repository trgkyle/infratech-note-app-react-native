import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  MainScreen: {name: string};
  EditNoteScreen: {name: string; noteIndex: number};
};

type MainRouteProp = RouteProp<RootStackParamList, 'MainScreen'>;
type EditNoteRouteProp = RouteProp<RootStackParamList, 'EditNoteScreen'>;

type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainScreen'
>;

type EditNoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditNoteScreen'
>;

export type MainScreenScreenProps = {
  route: MainRouteProp;
  navigation: MainScreenNavigationProp;
};
export type EditScreenScreenProps = {
  route: EditNoteRouteProp;
  navigation: EditNoteScreenNavigationProp;
};
