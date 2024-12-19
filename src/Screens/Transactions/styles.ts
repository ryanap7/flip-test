import {Colors} from '@themes/Colors';
import {scaleSize} from '@utils/Normalize';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: scaleSize(16),
  },
  card: {
    padding: scaleSize(16),
    backgroundColor: Colors.White,
    borderRadius: scaleSize(8),
    overflow: 'hidden',
  },
  cardSkeleton: {
    padding: scaleSize(16),
    backgroundColor: Colors.White,
    borderRadius: scaleSize(8),
    borderWidth: 0.25,
    marginBottom: scaleSize(16),
  },
  list: {
    padding: scaleSize(16),
  },
  att: {
    width: scaleSize(6),
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  dot: {
    width: scaleSize(4),
    height: scaleSize(4),
    borderRadius: scaleSize(2),
    backgroundColor: Colors['Typography-900'],
  },
});

export default styles;
