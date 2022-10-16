import {StyleSheet, Text, View} from 'react-native';
import {fontScale, height, width} from '../../theme/dimensions';
import styles from '../../theme/styles';
import {ExpandedComponent} from '../atoms/ExpandedComponent';

export const ImageInfo = ({item}) => {
  return (
    <ExpandedComponent title="Image Info">
      <View style={[styles.rowContainer, stylesComponent.container]}>
        <Text style={[styles.textRegular, stylesComponent.textLeft]}>
          Model
        </Text>
        <Text style={[styles.textBold, stylesComponent.textRight]}>
          {item.code}
        </Text>
      </View>

      <View style={[styles.rowContainer, stylesComponent.container]}>
        <Text style={[styles.textRegular, stylesComponent.textLeft]}>
          Model Name
        </Text>
        <Text style={[styles.textBold, stylesComponent.textRight]}>
          {item.name}
        </Text>
      </View>

      <View style={[styles.rowContainer, stylesComponent.container]}>
        <Text style={[styles.textRegular, stylesComponent.textLeft]}>
          Model Type
        </Text>
        <Text style={[styles.textBold, stylesComponent.textRight]}>
          {item.type}
        </Text>
      </View>

      <View style={[styles.rowContainer, stylesComponent.container]}>
        <Text style={[styles.textRegular, stylesComponent.textLeft]}>Cost</Text>
        <Text style={[styles.textBold, stylesComponent.textRight]}>
          {item.cost}
        </Text>
      </View>

      <View style={[styles.rowContainer, stylesComponent.container]}>
        <Text style={[styles.textRegular, stylesComponent.textLeft]}>
          Category
        </Text>
        <Text style={[styles.textBold, stylesComponent.textRight]}>
          {item.category}
        </Text>
      </View>

      <View style={[styles.rowContainer, stylesComponent.container]}>
        <Text style={[styles.textRegular, stylesComponent.textLeft]}>
          Additional Description
        </Text>
        <Text style={[styles.textBold, stylesComponent.textRight]}>
          {item.additionalDesc}
        </Text>
      </View>
    </ExpandedComponent>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingEnd: width * 0.02,
    marginTop: height * 0.007,
  },
  textLeft: {
    textAlign: 'left',
    fontSize: fontScale * 16,
    flex: 1,
  },
  textRight: {
    textAlign: 'right',
    fontSize: fontScale * 15,
    flex: 1,
    flexGrow: 1,
  },
});
