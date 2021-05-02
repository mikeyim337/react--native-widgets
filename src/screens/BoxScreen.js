import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen</Text>
        <Text style={styles.textStyle}>Box Screen</Text>
        <Text style={styles.textStyle}>Box Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
  
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        
    }
});

export default BoxScreen;