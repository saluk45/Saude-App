import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native"
import styles from "./style";
export default function Form(){
    
    return( 
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
         <View style={styles.form}>
            <Text>teste</Text>

            <View/>

         </View>
         
        </Pressable>
    );
}