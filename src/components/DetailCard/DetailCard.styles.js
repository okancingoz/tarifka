import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  innerHeader: {
    flex: 2,
    gap: 4,
  },
  meal: {
    fontSize: 22,
    color: '#1b0c02',
    fontWeight: '600',
  },
  tags: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#888',
  },
  area: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '500',
    color: '#666',
  },
  desc: {
    padding: 12,
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  btnYoutube: {
    backgroundColor: '#FF0000',
    margin: 12,
    borderRadius: 9,
    padding: 12,
  },
  btnTitle: {
    fontWeight:'bold',
    fontSize:16,
    textAlign: 'center',
    color: '#fff',
  },
});
