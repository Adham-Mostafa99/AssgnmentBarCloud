import {useCallback} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {navigateToModelScreen} from '../../navigation/Navigations';
import colors from '../../theme/colors';
import {fontScale, width} from '../../theme/dimensions';
import styles from '../../theme/styles';
import {Card} from '../../container/Card';

export const PictureItem = ({item}) => {
  //* Handle item toggle, nav to selected screen
  const onPressItem = useCallback(() => {
    // For static data
    if (item.id === 1) navigateToModelScreen();
  }, [item]);

  return (
    <Card
      color={colors.cardBackgroundColor}
      radius={30}
      width={width * 0.78}
      onPress={onPressItem}>
      <View style={[styles.rowContainer,stylesComponent.container]}>
        <Image source={item.icon} style={stylesComponent.icon} />

        <Text
          numberOfLines={1}
          style={[stylesComponent.title, styles.textBold]}>
          {item.title}
        </Text>
        <Image
          source={require('../../assets/images/click_arrow.png')}
          style={stylesComponent.arrow}
        />
      </View>
    </Card>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    paddingVertical: width * 0.03,
  },
  icon: {
    height: width * 0.07,
    width: width * 0.07,
    resizeMode: 'contain',
  },
  arrow: {
    height: width * 0.055,
    width: width * 0.055,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    maxWidth: '80%',
    textAlign: 'left',
    fontSize: fontScale * 18,
    marginStart: width * 0.04,
  },
});
