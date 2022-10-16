import {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card} from '../../container/Card';
import colors from '../../theme/colors';
import {width} from '../../theme/dimensions';
import styles from '../../theme/styles';
import {
  getImageFilePath,
  getImageFileURIPath,
  isFileExist,
} from '../../utils/FileUtils';

export const ModelPictureCard = ({pic, width, height, size = 1}) => {
  const [image, setImage] = useState(
    require('../../assets/images/placeholder.png'),
  );

  useEffect(() => {
    async function getImage() {
      const isFound = await isFileExist(getImageFilePath(pic));
      if (isFound) setImage({uri: getImageFileURIPath(pic)});
    }

    getImage();
  }, [pic]);

  return (
    <Card
      color={colors.white}
      radius={20}
      width={width}
      height={height}
      centerChild>
      <View style={[stylesComponent().container, styles.centerBox]}>
        <Image source={image} style={stylesComponent(size).image} />
      </View>
    </Card>
  );
};

const stylesComponent = size =>
  StyleSheet.create({
    container: {
      paddingVertical: width * 0.01,
    },
    image: {
      height: size * width * 0.24,
      width: size * width * 0.36,
      resizeMode: 'contain',
    },
  });
