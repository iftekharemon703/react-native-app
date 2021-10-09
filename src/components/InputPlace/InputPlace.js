import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputPlace = props => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={{
                    width: "80%",
                    borderBottomWidth: 1,
                    borderColor: "green",
                    padding: 7
                }}
                placeholder="Add a Place.."
                value={props.inputValue}
                onChangeText={text => props.setInputValue(text)}
            />
            <Button
                title="Add"
                onPress={() => {
                    if (props.inputValue !== "") {
                        props.addPlace( {
                            key: Math.random().toString(),
                            value: props.inputValue,
                            image: {
                                uri: "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                            }
                        });
                        props.setInputValue("");
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        padding: 20,
        width: "100%",
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default InputPlace;