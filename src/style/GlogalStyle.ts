import { StyleSheet } from "react-native";
import { colors } from "../constants/color";
import { fontFamilies } from "../constants/fontFamilies";



export const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.BcGrColor,
        padding: 20,
        paddingTop: 32,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        fontSize: 14,
        fontFamily: fontFamilies.light,
        color: colors.Text,
    },
    section: {
        marginBottom: 16,
    },
    inputContainer:{
        backgroundColor: colors.Gray,
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 10,
    }
})