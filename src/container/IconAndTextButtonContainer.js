import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../theme/colors';
import {height, width} from '../theme/dimensions';

export const IconsAndTextButtonContainer = ({onPress, children}) => {
  return (
    <TouchableOpacity style={stylesComponent.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const stylesComponent = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 1.5,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.007,
  },
});
