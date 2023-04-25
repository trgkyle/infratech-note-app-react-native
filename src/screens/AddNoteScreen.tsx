import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, Button, IconButton, TextInput} from 'react-native-paper';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {INoteItem} from '../mocks/data';
import {AddNoteScreenScreenProps} from './screen.types';
import {INoteItem} from '../mocks/data';
import {NoteContext} from '../../App';

const iconRenderItem = () => (
  <Icon name="arrow-back" size={24} color={'#000'} />
);
const AddNoteScreen: React.FC<AddNoteScreenScreenProps> = ({navigation}) => {
  const {noteList, setNoteList} = useContext(NoteContext);
  const [inputTextTitle, setInputTextTitle] = useState<string>('');
  const [inputTextShortDes, setInputTextShortDes] = useState<string>('');
  const [inputTextDes, setInputTextDes] = useState<string>('');

  const handleEditNote = () => {
    const itemChanged: INoteItem = {
      id: noteList.length,
      title: inputTextTitle,
      short: inputTextShortDes,
      description: inputTextDes,
      date: new Date(Date.now()),
    };
    noteList.push(itemChanged);
    setNoteList(noteList);
    navigation.navigate('MainScreen', {
      name: 'MainScreen',
    });
  };

  const handleBackScreen = () => {
    navigation.navigate('MainScreen', {name: 'MainScreen'});
  };
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <IconButton icon={() => iconRenderItem()} onPress={handleBackScreen} />
        <Appbar.Content
          title={'Add Note'}
          style={styles.content}
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <ScrollView style={styles.listContainer}>
        <TextInput
          value={inputTextTitle}
          label="Title"
          onChangeText={setInputTextTitle}
        />
        <TextInput
          value={inputTextShortDes}
          label="Short Description"
          onChangeText={setInputTextShortDes}
        />
        <TextInput
          value={inputTextDes}
          label="Description"
          onChangeText={setInputTextDes}
        />
        <Button mode="contained" onPress={handleEditNote} style={styles.button}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: '#E8E6E9',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    flexShrink: 9,
    width: widthScreen - 100,
  },
  switchStyle: {
    flexShrink: 1,
  },
  button: {
    marginVertical: 10,
  },
});

export default AddNoteScreen;
