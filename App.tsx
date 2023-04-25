/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Dimensions, StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainScreen from './src/screens/MainSreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EditNoteScreen from './src/screens/EditNoteScreen';
import {RootStackParamList} from './src/screens/screen.types';
import {INoteItem, defaultNoteList} from './src/mocks/data';
const Stack = createStackNavigator<RootStackParamList>();

interface NoteContextValue {
  noteList: INoteItem[];
  setNoteList: React.Dispatch<React.SetStateAction<INoteItem[]>>;
}

export const NoteContext = React.createContext<NoteContextValue>({
  noteList: [],
  setNoteList: () => {},
});
function App(): JSX.Element {
  const [noteList, setNoteList] = useState<INoteItem[]>(defaultNoteList);
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: '#F1FCFF',
    height: Dimensions.get('window').height,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NoteContext.Provider value={{noteList, setNoteList}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="EditNoteScreen" component={EditNoteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NoteContext.Provider>
    </SafeAreaProvider>
  );
}
export default App;
