import {StyleSheet} from 'react-native';
import colors from './colors';
import {fontScale, height, width} from './dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  centerBox:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.05,
    paddingBottom: height * 0.1,
    backgroundColor: colors.backgroundColor,
  },
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: {
    fontFamily: 'OpenSansBold',
    fontSize: fontScale * 20,
    color: colors.textPrimary,
  },
  textBold: {
    fontFamily: 'OpenSansBold',
    color: colors.textPrimary,
  },
  textItalic: {
    fontFamily: 'OpenSansItalic',
    color: colors.textPrimary,
  },
  textRegular: {
    fontFamily: 'OpenSansRegular',
    color: colors.textPrimary,
  },
  VSeparator: {
    height: height * 0.025,
  },
  VLineSeparator: {
    width:width*.85,
    height: height * 0.003,
    alignSelf:'center',
    marginVertical: height * 0.02,
    backgroundColor: colors.primary,
  },
});
