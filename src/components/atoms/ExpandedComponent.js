import {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconButtonContainer} from '../../container/IconButtonContainer';
import {fontScale, width} from '../../theme/dimensions';
import styles from '../../theme/styles';

export const ExpandedComponent = ({title, children}) => {
  const [expand, setExpand] = useState(true);

  //* Handle expand toggle
  const onExpand = useCallback(() => {
    setExpand(e => !e);
  }, [expand]);

  return (
    <View style={stylesComponent.container}>
      <View style={[styles.rowContainer, stylesComponent.content]}>
        <Text style={[styles.textBold, stylesComponent.text]}>{title}</Text>
        <IconButtonContainer onPress={onExpand}>
          <Image
            style={stylesComponent.image}
            source={
              expand
                ? require('../../assets/images/expand.png')
                : require('../../assets/images/collespand.png')
            }
          />
        </IconButtonContainer>
      </View>
      <View style={stylesComponent.childContainer}>{expand && children}</View>
    </View>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    paddingHorizontal: 0,
  },
  text: {
    textAlign: 'left',
    fontSize: fontScale * 18,
  },
  image: {
    height: width * 0.035,
    width: width * 0.035,
    resizeMode: 'contain',
  },
  childContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
