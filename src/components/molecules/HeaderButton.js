import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fontScale, width} from '../../theme/dimensions';
import styles from '../../theme/styles';

export const HeaderButton = ({title, imageSrc, onPress}) => {
  return (
    <TouchableOpacity style={stylesComponent.container} onPress={onPress}>
      <Image style={stylesComponent.icon} source={imageSrc} />
      <Text style={[stylesComponent.text, styles.textBold]}>{title}</Text>
    </TouchableOpacity>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: width * 0.07,
    height: width * 0.07,
  },
  text: {
    fontSize: fontScale * 8,
  },
});
