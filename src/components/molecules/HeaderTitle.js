import {StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';
import {fontScale, height, width} from '../../theme/dimensions';
import styles from '../../theme/styles';

export const HeaderTitle = ({title}) => {
  return (
    <View style={stylesComponent.container}>
      <Text numberOfLines={1} style={[stylesComponent.title, styles.textBold]}>
        {title}
      </Text>
    </View>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    marginStart: width * 0.01,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: fontScale * 20,
    marginBottom: height * 0.01,
    maxWidth: '70%',
  },
});
