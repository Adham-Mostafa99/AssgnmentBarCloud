import {useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {navigateToModelDetailsScreen} from '../../navigation/Navigations';
import colors from '../../theme/colors';
import {fontScale, height, width} from '../../theme/dimensions';
import styles from '../../theme/styles';
import {ModelPictureCard} from '../atoms/ModelPictureCard';

export const ModelItem = ({item}) => {
  //* Handle item toggle, nav to details screen
  const onPressItem = useCallback(() => {
    navigateToModelDetailsScreen({item, title: item.name});
  }, [item]);

  return (
    <TouchableOpacity style={styles.centerBox} onPress={onPressItem}>
      <ModelPictureCard pic={item.imageLink} />
      <Text numberOfLines={2} style={[stylesComponent.title, styles.textBold]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const stylesComponent = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: fontScale * 11,
    marginTop: height * 0.006,
    maxWidth: width * 0.4,
  },
});
