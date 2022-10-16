import {goBack} from '../../navigation/NavActions';
import {HeaderButton} from './HeaderButton';

export default () => {
  return (
    <HeaderButton
      title="Back"
      imageSrc={require('../../assets/images/back_arrow.png')}
      onPress={goBack}
    />
  );
};
