import {navigate} from './NavActions';

export const navigateToModelScreen = params => {
  navigate('Model', params);
};

export const navigateToModelDetailsScreen = params => {
  navigate('ModelDetails', params);
};
