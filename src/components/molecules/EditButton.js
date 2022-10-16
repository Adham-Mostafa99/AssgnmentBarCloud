import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { IconsAndTextButtonContainer } from '../../container/IconAndTextButtonContainer';
import colors from '../../theme/colors';
import {fontScale, height, width} from '../../theme/dimensions';
import styles from '../../theme/styles';

export const EditButton = ({onPress}) => {
  return (
   <IconsAndTextButtonContainer onPress={onPress}>
      <Image
        style={stylesComponent.icon}
        source={require('../../assets/images/edit.png')}
      />
      <Text style={[stylesComponent.text, styles.textBold]}>Edit</Text>
   </IconsAndTextButtonContainer>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 1.5,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.007,
  },
  icon: {
    width: width * 0.04,
    height: width * 0.04,
    marginEnd: width * 0.01,
  },
  text: {
    fontSize: fontScale * 12,
  },
});
