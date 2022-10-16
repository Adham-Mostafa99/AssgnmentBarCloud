import {View} from 'react-native';
import {width} from '../../theme/dimensions';
import styles from '../../theme/styles';

export const ItemVSeparator = () => <View style={styles.VSeparator} />;
export const ItemVLineSeparator = () => <View style={styles.VLineSeparator} />;
export const ItemMediumVLineSeparator = () => (
  <View style={[styles.VLineSeparator, {width: width * .78}]} />
);
