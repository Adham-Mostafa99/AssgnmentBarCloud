import {StyleSheet, Text, View} from 'react-native';
import {fontScale} from '../../theme/dimensions';
import styles from '../../theme/styles';
import moment from 'moment'

export const NoteItem = ({item}) => {
  return (
    <View>
      <Text
        numberOfLines={1}
        style={[styles.textBold, stylesComponent.textName]}>
        {item.userName}
      </Text>
      <Text
        numberOfLines={1}
        style={[styles.textItalic, stylesComponent.textDate]}>
        {moment(item.date).format('dddd, MMMM Do YYYY, h:mm:ss a')}
      </Text>
      <Text style={[styles.textRegular, stylesComponent.textDesc]}>
        {item.details}
      </Text>
    </View>
  );
};
//   console.log('TAGA', );

const stylesComponent = StyleSheet.create({
  textName: {
    textAlign: 'left',
    fontSize: fontScale * 13,
  },
  textDate: {
    textAlign: 'left',
    fontSize: fontScale * 10,
  },
  textDesc: {
    textAlign: 'left',
    fontSize: fontScale * 13,
  },
});
