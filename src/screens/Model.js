import {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemVLineSeparator} from '../components/molecules/lItemSeparator';
import {ModelItem} from '../components/molecules/ModelItem';
import {SearchField} from '../components/molecules/SearchField';
import DismissKeyboard from '../container/DismissKeyboard';
import {getAllModelsByType} from '../store/actions/ModelActions';
import {height, width} from '../theme/dimensions';
import styles from '../theme/styles';
import {isNullOrEmpty} from '../utils/StringUtils';

export const Model = () => {
  const [data, setData] = useState([]);

  const getData = typeId => {
    getAllModelsByType(typeId)
      .then(result => {
        if (result) setData(result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //* Init data for models, get data from db
  useEffect(() => {
    getData();
  }, []);

  //* Refresh screen with filtered data
  const onSearch = useCallback(
    val => {
      if (isNullOrEmpty(val)) getData();
      else getData(val);
    },
    [data],
  );

  //* identifier for render component
  const keyExtractor = useCallback(item => item.id, []);

  //* Memorized component for render
  const renderItem = useMemo(
    () =>
      ({item}) =>
        <ModelItem item={item} />,
    [],
  );
  return (
    <DismissKeyboard>
      <View style={styles.container} onStartShouldSetResponder={() => true}>
        <View style={stylesComponent.viewContainerStyle}>
          <SearchField onSearch={onSearch} />
        </View>
        <FlatList
          data={data}
          numColumns={2}
          keyboardShouldPersistTaps="always"
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={[
            styles.contentContainerStyle,
            stylesComponent.contentContainerStyle,
          ]}
          ItemSeparatorComponent={ItemVLineSeparator}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
      </View>
    </DismissKeyboard>
  );
};

const stylesComponent = StyleSheet.create({
  viewContainerStyle: {
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.03,
    alignItems: null,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
