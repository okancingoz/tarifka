import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    margin: 12,
    borderRadius: 9,
    alignItems: 'center',
    elevation:18
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  category: {
    color:'#1b0c02',
    fontSize: 14,
    fontWeight: '600',
  },
});
