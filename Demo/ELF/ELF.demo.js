import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import initAelf from './utils/initAelf'
// import aelfSDK from './utils/aelf.web'

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin: 20
    }
});

console.log('?????1', typeof window !== 'undefined', !window.Aelf);
let aelf = initAelf();
console.log('aelf: ', aelf);

class ELFDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Elf Demo 23333t5</Text>
                </View>
            </View>
        );
    }

}

export default ELFDemo;