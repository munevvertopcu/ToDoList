import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: "#7da453",
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    containerCompleted: {
        backgroundColor: "#808080",
    },
    titleCompleted: {
        color: "#fff",
        textDecorationLine: "line-through",
    },
})