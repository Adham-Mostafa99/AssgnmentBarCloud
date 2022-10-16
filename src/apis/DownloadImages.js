import RNFS from 'react-native-fs';
import {getImageFilePath} from '../utils/FileUtils';

export const downloadImage = async (imageUrl, imageName) => {
  return RNFS.downloadFile({
    fromUrl: imageUrl,
    toFile: getImageFilePath(imageName),
  })
    .promise.then(r => {
      console.log('Images Downloaded');
    })
    .catch(error => {
      console.error(error);
    });
};
