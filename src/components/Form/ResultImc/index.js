import React from 'react'
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style"
import { AntDesign } from '@expo/vector-icons';


export default function ResultImc(props) {
    const onShare = async () => {
      const result = await Share.share({
        message: "Meu Imc e: " + props.resultImc,
      });
    };
  
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxSharebutton}>
                {props.resultImc != null ?
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}>
                    <Text style ={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                 }
            </View>
        </View>
    );
}