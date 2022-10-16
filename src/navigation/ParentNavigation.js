import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import BackButton from '../components/molecules/BackButton';
import {HeaderTitle} from '../components/molecules/HeaderTitle';
import {Model} from '../screens/Model';
import {ModelDetails} from '../screens/ModelDetails';
import {Picture} from '../screens/Picture';
import styles from '../theme/styles';

export const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Picture"
      screenOptions={({route}) => ({
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
        headerLeft: () => <BackButton />,
        headerTitle: () => <HeaderTitle title={route.params.title} />,
        headerBackVisible: false
      })}>
      <Stack.Screen
        name="Picture"
        component={Picture}
        initialParams={{title: 'Picture'}}
      />

      <Stack.Screen
        name="Model"
        component={Model}
        initialParams={{title: 'Model'}}
      />
      <Stack.Screen
        name="ModelDetails"
        component={ModelDetails}
        initialParams={{title: 'ModelDetails'}}
      />

      {/* <Stack.Screen name='AssetInventory' component={AssetInventoryScreen} /> */}
      {/* <Stack.Screen name='Person' component={PersonScreen} /> */}
    </Stack.Navigator>
  );
};
