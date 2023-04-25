import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Appbar, FAB, TextInput} from 'react-native-paper';
import {INoteItem, defaultNoteList} from '../mocks/data';
import NoteItem from '../components/NoteItem';
import {MainScreenScreenProps} from './screen.types';
import {NoteContext} from '../../App';

const MainScreen: React.FC<MainScreenScreenProps> = ({navigation}) => {
  const {noteList, setNoteList} = useContext(NoteContext);
  const [inputTextSearch, setInputTextSearch] = useState<string>('');
  const [sortByAsc, setSortByAsc] = useState<boolean>(false);

  const changeInputTextSearch = (text: string) => {
    setInputTextSearch(text);
  };

  const navigateToEditScreen = (index: number) => {
    navigation.navigate('EditNoteScreen', {
      name: 'EditNoteScreen',
      noteIndex: index,
    });
  };

  const navigateToAddScreen = () => {
    navigation.navigate('AddNoteScreen', {
      name: 'AddNoteScreen',
    });
  };

  const searchNoteByInput = useCallback(
    (inputTextSearchP: string) => {
      const newData = defaultNoteList
        .filter((item: INoteItem) => {
          if (item.title.includes(inputTextSearchP)) {
            return true;
          }
          return false;
        })
        .sort((a, b) => (sortByAsc ? a.id - b.id : b.id - a.id));
      setNoteList(newData);
    },
    [setNoteList, sortByAsc],
  );

  useEffect(() => {
    searchNoteByInput(inputTextSearch);
  }, [inputTextSearch, searchNoteByInput]);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content
          title="NOTE APP"
          style={styles.content}
          titleStyle={styles.title}
        />
        <Appbar.Action
          icon={sortByAsc ? 'sort-ascending' : 'sort-descending'}
          onPress={() => {
            setSortByAsc(!sortByAsc);
          }}
        />
      </Appbar.Header>
      <View style={styles.contentScreen}>
        <TextInput
          value={inputTextSearch}
          label="searchInput"
          onChangeText={changeInputTextSearch}
        />
        <View style={styles.listWrapper}>
          <FlatList
            data={noteList}
            numColumns={2}
            renderItem={({item, index}) => (
              <NoteItem
                data={item}
                navigation={() => navigateToEditScreen(index)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <FAB style={styles.fab} small icon="plus" onPress={navigateToAddScreen} />
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginRight: -40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentScreen: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  listWrapper: {},
  cardWrapper: {
    width: '50%',
    padding: 10,
  },
  card: {
    backgroundColor: '#374155',
    padding: 10,
    minHeight: 100,
    borderRadius: 4,
  },
  cardDateTitle: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'right',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardShortDes: {
    fontSize: 10,
    fontWeight: '400',
    color: '#fff',
  },
  cardDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FCFCFF',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
export default MainScreen;
