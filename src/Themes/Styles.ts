import {Colors} from '@themes/Colors';
import {GlobalStylesType} from 'src/Types/styles';

export const GlobalStyles: GlobalStylesType = {
  shadowStyle: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  selfAligned: {
    alignSelf: 'baseline',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
};
