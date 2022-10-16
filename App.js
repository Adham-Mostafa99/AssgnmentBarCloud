import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {downloadImage} from './src/apis/DownloadImages';
import AppContainer from './src/container/AppContainer';
import {populateDB} from './src/store/actions';
import {initModelRecords} from './src/store/actions/ModelActions';
import colors from './src/theme/colors';
import {getImageFilePath, isFileExist} from './src/utils/FileUtils';
import {images} from './TestData';

const App = () => {
  async function downloadImages() {
    images.forEach(async item => {
      if (!(await isFileExist(getImageFilePath(item.name))))
        downloadImage(item.url, item.name);
    });
  }

  useEffect(() => {
    async function init() {
      downloadImages();
      await populateDB();
      await initModelRecords();
    }
    init();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.darkPrimary} />
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
