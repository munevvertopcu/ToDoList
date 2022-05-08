import React, { memo } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './InputBox.style';

const InputBox = ({ toDo, setTodo }) => {
    const [inputText, setInputText] = React.useState("");

    // const onChange = (text) => console.log(text);

    const onClick = () => {
        const isDuplicate = toDo.find((element) => element.title === inputText);
        if (inputText && !isDuplicate) {
            const newTodo = {
                id: new Date().getTime().toString(),
                title: inputText,
                completed: false,
            };
            setTodo([...toDo, newTodo]);
            setInputText("");
        };
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Yapılacak...'
                value={inputText}
                onChangeText={setInputText}

            />
            <TouchableOpacity
                style={styles.button}
                onPress={onClick}
                disabled={!inputText}
            >
                <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
};

export default memo(InputBox);