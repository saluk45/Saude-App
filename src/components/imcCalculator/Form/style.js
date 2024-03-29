import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  formContext: {
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
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10
    },
    formLabel:{
        color:"black",
        fontSize:18,
        paddingLeft: 20,
    },
    input:{
        width:"95%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    ButtonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"95%",
        backgroundColor:"green",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"white"
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
});

export default styles