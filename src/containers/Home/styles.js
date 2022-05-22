import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    height: '100%'
  },
  notesHeader: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '700'
  },
  headerView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    height: 70,
    justifyContent: 'space-between',
  },
  inputView: {
    alignSelf: 'center',
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#d3d3d3'
  },
  divider: {
    height: 2,
    backgroundColor: '#a1a1a1',
    marginVertical: 5
  },
  addButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    backgroundColor: '#D3D3D3',
    width: width / 10,
    height: width / 9.8,
    borderRadius: width / 5,
    right: 35,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    paddingBottom: 3
  },
  addIcon: {
    fontSize: 24,
    fontWeight: '700'
  }
});