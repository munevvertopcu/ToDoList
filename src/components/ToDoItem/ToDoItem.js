import React, {memo} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ToDoItem.style';

const ToDoItem = ({ todoData, toDo, setTodo }) => {

    const [isCompleted, setIscompleted] = React.useState(todoData.completed);

    const handleComplete = () => {
        setTodo(
            toDo.map((element) =>
            element.id === todoData.id ? { ...element, completed: !isCompleted } : element
            )
        );
        setIscompleted(!isCompleted);
    };

    const handleDelete = () =>
    setTodo(toDo.filter((element) => element.id !== todoData.id));

    return (
        <TouchableOpacity 
        style={[styles.container, isCompleted && styles.containerCompleted]}
        onPress={handleComplete}
        onLongPress={handleDelete}
        >
            <Text style={[styles.title, isCompleted && styles.titleCompleted]}>
                {todoData.title}
            </Text>
        </TouchableOpacity>
    )
};

export default memo(ToDoItem);