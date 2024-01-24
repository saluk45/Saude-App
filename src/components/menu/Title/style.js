import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    boxTitle: {
        alignItems: "center",
        justfyContent: "center",
        paddingTop:10,
    },
    textTitle:{
        color:"green",
        fontSize:45,
        fontWeight:"bold",
    },
    search:{

    },
    searchIcon:{
        color:"green",
        paddingLeft:20,
        paddingTop:60,
    },
    boxContent: {
        width:"100%",
        height:"100%",
        justifyContent:"space-around",
        bottom:0,
        backgroundColor:"white",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30
    },
    
    content:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10
    },
    bottonImc:{
        backgroundColor:"#1877f2",
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5,    
        alignItems:"center"

    }
});

export default styles