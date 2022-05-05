import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import InputBox from './components/InputBox';
import ToDoItem from './components/ToDoItem';


function App() {
  const [toDo, setTodo] = React.useState([]);

  const renderitem = ({ item }) => (
    <ToDoItem todoData={item} toDo={toDo} setTodo={setTodo} />
  );

  const toDoLength = toDo.filter((element) => !element.completed).length;

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.count}>{toDoLength}</Text>
      </View>
      <View style={{flex:1}}>
      <FlatList
        data={toDo}
        renderItem={renderitem}
      />
      </View>
      <InputBox toDo={toDo} setTodo={setTodo} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f4f4f',
    flex: 1,
    justifyContent: 'space-between'


  },
  title_container: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffa500',

  },
  count: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffa500',

  }
})

export default App;