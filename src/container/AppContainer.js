import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigation/NavActions';
import {Navigator} from '../navigation/ParentNavigation';

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
};
