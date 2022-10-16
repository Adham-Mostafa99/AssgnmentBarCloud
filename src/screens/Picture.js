import {useCallback, useEffect, useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {HeaderButton} from '../components/molecules/HeaderButton';
import {ItemVSeparator} from '../components/molecules/lItemSeparator';
import {PictureItem} from '../components/molecules/PictureItem';
import styles from '../theme/styles';

const staticData = [
  {
    id: 0,
    title: 'Asset Inventory',
    icon: require('../assets/images/asset.png'),
  },
  {id: 1, title: 'Model', icon: require('../assets/images/person.png')},
  {id: 2, title: 'Person', icon: require('../assets/images/person.png')},
];

export const Picture = ({navigation}) => {
  //* Create process button and handle its toggle
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          title="Process"
          imageSrc={require('../assets/images/process.png')}
          onPress={onClickProcessButton}
        />
      ),
    });
  }, [navigation, onClickProcessButton]);

  //* Handle on process toggle
  const onClickProcessButton = useCallback(() => {
    // TODO something
  }, []);

  //* identifier for render component
  const keyExtractor = useCallback(item => item.id, [staticData]);

  //* Memorized component for render
  const renderItem = useMemo(
    () =>
      ({item}) =>
        <PictureItem item={item} />,
    [staticData],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={staticData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={ItemVSeparator}
      />
    </View>
  );
};
