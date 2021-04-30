import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Freind #1', age: 20},
        { name: 'Freind #2', age: 22},
        { name: 'Freind #3', age: 26},
        { name: 'Freind #4', age: 24},
        { name: 'Freind #5', age: 22},
        { name: 'Freind #6', age: 20},   

    ]
    return (
        <FlatList
            keyExtractor={(friend) => friend.name} 
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{ item.name } - Age { item.age }</Text>
            }} 
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;