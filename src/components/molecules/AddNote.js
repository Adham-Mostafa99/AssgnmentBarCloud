import {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Card} from '../../container/Card';
import {IconButtonContainer} from '../../container/IconButtonContainer';
import colors from '../../theme/colors';
import {fontScale, width} from '../../theme/dimensions';
import styles from '../../theme/styles';

export const AddNote = ({onSave}) => {
  const [note, setNote] = useState('');

  //* Handle save note Toggle
  const saveNote = useCallback(async () => {
    onSave(note);
    setNote('');
  }, [note]);

  //* Listener to text changes of input
  const onChangeText = useCallback(
    val => {
      setNote(val);
    },
    [note],
  );

  return (
    <Card color={colors.white} radius={40} width={width * 0.85}>
      <View style={[styles.rowContainer, stylesComponent.container]}>
        <TextInput
          style={[styles.textItalic, stylesComponent.text]}
          placeholder="Add a Note…"
          value={note}
          onChangeText={onChangeText}
        />
        <IconButtonContainer onPress={saveNote}>
          <Image
            style={stylesComponent.icon}
            source={require('../../assets/images/save.png')}
          />
          <Text style={[stylesComponent.textIcon, styles.textBold]}>Save</Text>
        </IconButtonContainer>
      </View>
    </Card>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.01,
    paddingVertical: width * 0.005,
  },
  icon: {
    height: width * 0.035,
    width: width * 0.035,
    resizeMode: 'contain',
  },
  textIcon: {
    fontSize: fontScale * 10,
  },
  text: {
    flex: 1,
    fontSize: fontScale * 15,
    padding: 0,
    marginEnd: width * 0.03,
  },
});
