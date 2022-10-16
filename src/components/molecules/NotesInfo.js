import {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {addNote, getAllNotesByModelId} from '../../store/actions/NoteActions';
import colors from '../../theme/colors';
import {fontScale, height, width} from '../../theme/dimensions';
import styles from '../../theme/styles';
import {ExpandedComponent} from '../atoms/ExpandedComponent';
import {AddNote} from './AddNote';
import {ItemMediumVLineSeparator} from './lItemSeparator';
import {NoteItem} from './NoteItem';

export const NotesInfo = ({item}) => {
  const [data, setData] = useState([]);

  const getData = () => {
    getAllNotesByModelId(item.id)
      .then(result => {
        if (result) setData(result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //* Init data for notes for specific model, get data from db
  useEffect(() => {
    getData();
  }, []);

  //* Refresh Notes when add new one
  const onSave = useCallback(
    async note => {
      await addNote(note, item.id);
      getData();
    },
    [data],
  );

  //* identifier for render component
  const keyExtractor = useCallback(item => item.id, [data]);

  //* Memorized component for render
  const renderItem = useMemo(
    () =>
      ({item}) =>
        <NoteItem item={item} />,
    [data],
  );
  return (
    <ExpandedComponent title="Notes">
      <AddNote onSave={onSave} />

      <Text style={[styles.textRegular, stylesComponent.headerText]}>
        History Notes
      </Text>

      {data.length > 0 && (
        <FlatList
          data={data}
          keyboardShouldPersistTaps="always"
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          contentContainerStyle={[
            styles.contentContainerStyle,
            stylesComponent.contentContainerStyle,
          ]}
          ItemSeparatorComponent={ItemMediumVLineSeparator}
        />
      )}

      {data.length === 0 && (
        <View style={stylesComponent.contentContainerStyle}>
          <Text style={[styles.textRegular, stylesComponent.noData]}>
            Empty Notes
          </Text>
        </View>
      )}
    </ExpandedComponent>
  );
};

const stylesComponent = StyleSheet.create({
  contentContainerStyle: {
    marginTop: height * 0.01,
    paddingTop: height * 0.01,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: width * 0.03,
    alignItems: 'flex-start',
    paddingBottom: height * 0.03,
    minWidth: width * 0.84,
  },
  headerText: {
    width: width * 0.8,
    marginTop: height * 0.03,
    fontSize: fontScale * 16,
    textAlign: 'left',
  },
  noData: {
    width: width * 0.8,
    marginTop: height * 0.03,
    fontSize: fontScale * 14,
    textAlign: 'center',
  },
});
