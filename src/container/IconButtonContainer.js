import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../theme/colors';
import {width} from '../theme/dimensions';

export const IconButtonContainer= ({children, onPress, size}) => {
  const [pressIn, setPressIn] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => {
        setPressIn(true);
      }}
      onPressOut={() => {
        setPressIn(false);
      }}>
      <View style={styles(pressIn, size).container}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = (pressed, size = width * 0.1) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: pressed ? colors.primary : null,
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  });
