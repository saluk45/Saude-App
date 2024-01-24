import React from 'react'
import { View, Text, TouchableOpacity, Vibration } from "react-native"
import styles from "./style"
import { AntDesign } from '@expo/vector-icons';



export default function Title(){
    return(
        <View>
                    <View>
        <TouchableOpacity style={styles.backToMenu}>
            <AntDesign style={styles.backToMenuTextL} name="leftcircle" size={30} />
            </TouchableOpacity>
        </View>

        <View style={styles.boxTitle}>
            
            <Text style={styles.textTitle}>SaudeApp</Text>

        </View>

        </View>
    );
}