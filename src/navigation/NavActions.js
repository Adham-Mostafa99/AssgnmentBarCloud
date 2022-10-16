import React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

//* Navigate to screen
export const navigate = (screenName, params) => {
  navigationRef.current?.navigate(screenName, params);
};

//* push screen above screen
export const push = (screenName, params) => {
  navigationRef.current?.dispatch(StackActions.push(screenName, params));
};

//* go to last back screen
export const goBack = () => {
  navigationRef.current?.goBack();
};
