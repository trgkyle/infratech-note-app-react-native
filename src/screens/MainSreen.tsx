import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const defaultData: IItem[] = [
  {
    id: 1,
    title: 'Lorem',
    short: 'Welist',
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 2,
    title: 'Lorem',
    short: 'Welist',
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 3,
    title: 'Lorem',
    short: 'Welist',
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 4,
    title: 'Lorem',
    short: 'Welist',
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 5,
    title: 'Lorem',
    short: 'Welist',
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 6,
    title: 'Lorem',
    short: 'Welist',
    description: 'Lorem Lorem Lorem',
  },
];
interface IItem {
  id: number;
  title: string;
  short: string;
  description: string;
}
const Item = ({data}: {data: IItem}) => (
  <View style={styles.cardContentWrapper}>
    <View style={styles.card}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.shortDes}>{data.short}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  </View>
);

const MainScreen = () => {
  // let cacheCall = useRef(null);

  const [data, setData] = useState<IItem[]>(defaultData);
  const [inputTextSearch, setInputTextSearch] = useState<string>('');

  const changeInputTextSearch = (text: string) => {
    setInputTextSearch(text);
  };

  const searchNoteByInput = useCallback(() => {
    const newData = data.filter((item: IItem) => {
      if (item.title.includes(inputTextSearch)) {
        return true;
      }
      return false;
    });
    setData(newData);
  }, [data, inputTextSearch]);

  useEffect(() => {
    searchNoteByInput();
  }, [inputTextSearch, searchNoteByInput]);
  return (
    <ScrollView style={styles.contentScreen}>
      <TextInput
        value={inputTextSearch}
        label="searchInput"
        onChangeText={changeInputTextSearch}
      />
      <FlatList
        data={data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentScreen: {
    width: 400,
    height: 400,
    backgroundColor: 'red',
  },
  cardWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EBEBEF',
    padding: 50,
  },
  cardContentWrapper: {
    flexDirection: 'row',
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: '#97D5D0',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  shortDes: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
  },
});
export default MainScreen;
