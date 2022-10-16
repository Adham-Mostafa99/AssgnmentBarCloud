import {useCallback, useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import colors from '../../theme/colors';
import {fontScale, height, width} from '../../theme/dimensions';
import styles from '../../theme/styles';
import {Card} from '../../container/Card';
import {IconButtonContainer} from '../../container/IconButtonContainer';

export const SearchField = ({onSearch}) => {
  const [value, setValue] = useState('');

  //* Handle barcode Toggle
  const barcodeToggle = useCallback(() => {
    // TODO Handle barcode button
  }, []);

  //* Listener to text changes of input
  const onChangeText = useCallback(
    val => {
      setValue(val);
      onSearch(val);
    },
    [value],
  );

  return (
    <Card color={colors.cardBackgroundColor} radius={40} width={width * 0.9}>
      <View style={[styles.rowContainer, stylesComponent.container]}>
        <TextInput
          style={[styles.textItalic, stylesComponent.text]}
          placeholder="Type to Search…"
          value={value}
          onChangeText={onChangeText}
        />
        <View style={stylesComponent.imageContainer}>
          <IconButtonContainer onPress={barcodeToggle}>
            <Image
              style={stylesComponent.image}
              source={require('../../assets/images/barcode.png')}
            />
          </IconButtonContainer>
        </View>
      </View>
    </Card>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    paddingVertical: width * 0.03,
  },
  imageContainer: {
    position: 'absolute',
    end: 0,
  },
  image: {
    height: width * 0.05,
    width: width * 0.05,
  },
  text: {
    flex: 1,
    fontSize: fontScale * 18,
    padding: 0,
    marginEnd: width * 0.03,
  },
});
