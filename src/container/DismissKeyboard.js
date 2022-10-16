import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';

export default ({children}) => (
  <TouchableWithoutFeedback
    style={{flex: 1}}
    onPress={() => Keyboard.dismiss()}
    accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);
