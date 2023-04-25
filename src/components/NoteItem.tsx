import React from 'react';
import {INoteItem} from '../mocks/data';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const NoteItem = ({
  data,
  navigation,
}: {
  data: INoteItem;
  navigation: (item: INoteItem) => void;
}) => {
  const buttonAddNoteClick = (item: INoteItem) => {
    navigation(item);
  };
  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => buttonAddNoteClick(data)}>
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

export default NoteItem;
