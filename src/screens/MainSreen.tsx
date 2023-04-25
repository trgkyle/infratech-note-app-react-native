import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Appbar, FAB, Text, TextInput} from 'react-native-paper';
import {NoteScreenProps} from './screen.types';
import {INoteItem, defaultNoteList} from '../mocks/data';

const Item = ({data}: {data: INoteItem}) => (
  <TouchableOpacity style={styles.cardWrapper}>
    <View style={styles.card}>
      <Text style={styles.cardDateTitle}>{data.date.toDateString()}</Text>
      <Text style={styles.cardTitle}>{data.title}</Text>
      <Text style={styles.cardShortDes}>{data.short}</Text>
      <Text style={styles.cardDescription} numberOfLines={4}>
        {data.description}
      </Text>
    </View>
  </TouchableOpacity>
);

const MainScreen: React.FC<NoteScreenProps> = ({navigation}) => {
  const [data, setData] = useState<INoteItem[]>(defaultNoteList);
  const [inputTextSearch, setInputTextSearch] = useState<string>('');
  const [sortByAsc, setSortByAsc] = useState<boolean>(false);

  const changeInputTextSearch = (text: string) => {
    setInputTextSearch(text);
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
      setData(newData);
    },
    [sortByAsc],
  );

  const buttonAddNoteClick = () => {
    navigation.navigate('AddNote', {name: 'AddNote'});
  };

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
            data={data}
            numColumns={2}
            renderItem={({item}) => <Item data={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <FAB style={styles.fab} small icon="plus" onPress={buttonAddNoteClick} />
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
