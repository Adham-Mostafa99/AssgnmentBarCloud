import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {width} from '../theme/dimensions';

export const Card = ({
  children,
  onPress,
  width,
  height,
  centerChild,
  radius,
  color,
}) => {
  return (
    <TouchableOpacity
    style={styles(radius, color, width, height, centerChild).card}
    onPress={onPress}
    disabled={!onPress}>
    {children}
  </TouchableOpacity>
  );
};

const styles = (radius, color, widthCard, heightCard, centerChild) =>
  StyleSheet.create({
    card: {
      width: widthCard ?? 'auto',
      minHeight: heightCard ?? 'auto',
      backgroundColor: color,
      borderRadius: radius,
      paddingHorizontal: width * 0.03,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      justifyContent: centerChild ? 'center' : null,
    },
  });
