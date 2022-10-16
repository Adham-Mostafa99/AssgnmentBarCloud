import RNFS from 'react-native-fs';

export const createFile = fileName => {
  const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;

  // write the file
  RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
    .then(success => {
      console.log('FILE WRITTEN!');
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getImageFilePath = imageName => {
  return `${RNFS.DocumentDirectoryPath}/${imageName}`;
};
export const getImageFileURIPath = imageName => {
  return `file://${RNFS.DocumentDirectoryPath}/${imageName}`;
};

export const isFileExist = async path => {
  return RNFS.exists(path);
};
