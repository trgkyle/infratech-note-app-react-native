import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, IconButton} from 'react-native-paper';
import {Dimensions} from 'react-native';
import {NoteScreenProps} from './screen.types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const iconRenderItem = () => (
  <Icon name="arrow-back" size={24} color={'#000'} />
);
const NoteList: React.FC<NoteScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <IconButton
          icon={() => iconRenderItem()}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title={'Edit Note'}
          style={styles.content}
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <ScrollView style={styles.listContainer} />
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
});

export default NoteList;
