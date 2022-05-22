import {StyleSheet} from "react-native";
import globalStyle from '../../common/styles';

const { width } = globalStyle;

export default StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#D3D3D3',
        marginTop: 20,
        width: '90%',
        borderRadius: 7,
        padding: 10,
        alignSelf: "center"
    },
    titleText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FaFaFa'
    },
    noteText: {
        fontSize: 14,
        fontWeight: '300',
        color: '#a1a1a1'
    },
    iconButton: {
        width: 50,
        height: 50,
    },
    icon: {
        width: 30,
        height: 30,
    }
})