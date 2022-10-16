import {useCallback, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ModelPictureCard} from '../components/atoms/ModelPictureCard';
import {EditButton} from '../components/molecules/EditButton';
import {ImageInfo} from '../components/molecules/ImageInfo';
import {ItemVLineSeparator} from '../components/molecules/lItemSeparator';
import {NotesInfo} from '../components/molecules/NotesInfo';
import {Card} from '../container/Card';
import DismissKeyboard from '../container/DismissKeyboard';
import colors from '../theme/colors';
import {height, width} from '../theme/dimensions';
import styles from '../theme/styles';

export const ModelDetails = ({navigation, route}) => {
  const {item} = route.params;
  //* Create Edit button and handle its toggle
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <EditButton onPress={onClickEditButton} />,
    });
  }, [navigation, onClickEditButton]);

  //* Handle on Edit toggle
  const onClickEditButton = useCallback(() => {
    // TODO something
  }, []);

  return (
    <DismissKeyboard>
      <View style={[styles.container, stylesScreen.container]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={stylesScreen.contentContainerStyle}>
          <Card
            color={colors.cardBackgroundColor}
            radius={30}
            height={height * 0.85}>
            <View style={stylesScreen.content} onStartShouldSetResponder={() => true}>
              <ModelPictureCard
                pic={item.imageLink}
                width={width * 0.6}
                height={height * 0.26}
                size={1.5}
              />
              <ItemVLineSeparator />
              <ImageInfo item={item} />

              <ItemVLineSeparator />
              <NotesInfo item={item} />
            </View>
          </Card>
        </ScrollView>
      </View>
    </DismissKeyboard>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
  },
  content: {
    alignItems: 'center',
    paddingVertical: width * 0.03,
  },
  contentContainerStyle: {
    paddingTop: height * 0.03,
    paddingBottom: height * 0.01,
  },
});
