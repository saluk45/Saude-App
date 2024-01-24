import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import styles from "./style"
import { AntDesign } from '@expo/vector-icons';

function goToImcCalculator(){
    }

export default function Title(){
    return(
<View>
    <View>

        <View>
          <TouchableOpacity style={styles.search}>
            <AntDesign style={styles.searchIcon} name="search1" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxTitle}>
         <Text style={styles.textTitle}>SaudeApp</Text>
        </View>

    </View>

 <View style={styles.boxContent}>

    <View style={styles.content}>
        <TouchableOpacity onPress={goToImcCalculator} style={styles.bottonImc}>
            <Text>calculo de imc</Text>
        </TouchableOpacity>
    </View>
         
 </View>


</View>
    );
}