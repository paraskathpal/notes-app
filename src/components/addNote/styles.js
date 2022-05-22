import {StyleSheet} from "react-native";
import globalStyle from '../../common/styles';

const { width } = globalStyle;

export default StyleSheet.create({
    headerText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FaFaFa'
    },
    inputView: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#D3D3D3',
      borderRadius: 5
    },
    saveButton: {
      width: width/ 5,
      marginTop: 10,
      alignSelf: "flex-end"
    },
    headerView: {
      flexDirection: "row",
      justifyContent: 'space-between'
    }, 
    closeIcon: {
      fontSize: 24,
      fontWeight: '700'
    }
})