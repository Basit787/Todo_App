import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import TodoHeader from './TodoHeader';
import styles from './TodosStyles';

interface Todo {
  _id: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
  dateTime: string;
  deadline: string;
}

const Todos = ({navigation}: {navigation: any}) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const isFocused = useIsFocused();

  const getTodos = async () => {
    // try {
    //   const result = await ApiInstance.get('/todo/getAllTodos');
    //   const fetchedTodos = result.data.result || [];
    //   setTodos(fetchedTodos);
    //   setFilteredTodos(fetchedTodos);
    // } catch (error) {
    //   console.error('Error while fetching todos', error);
    // }
  };

  useEffect(() => {
    if (isFocused) {
      getTodos();
    }
  }, [isFocused]);

  useEffect(() => {
    const filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredTodos(filtered);
  }, [searchQuery, todos]);

  const handleComplete = async (id: string, title: string) => {
    // try {
    //   await ApiInstance.put(`/todo/updateTodo/${id}`, {completed: true});
    //   showSnackbar(`${title} completed successfully`);
    //   getTodos();
    // } catch (error) {
    //   console.error('Error completing todo:', error);
    //   showSnackbar(`Failed to complete ${title}`);
    // }
  };

  const handleDelete = async (id: string, title: string) => {
    // try {
    //   await ApiInstance.delete(`/todo/deleteTodo/${id}`);
    //   showSnackbar(`${title} deleted successfully`);
    //   getTodos();
    // } catch (error) {
    //   showSnackbar(`Failed to delete ${title}`);
    //   console.error('Error deleting todo:', error);
    // }
  };

  const pendingCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  const renderItem = ({item}: {item: Todo}) => (
    <View style={styles.todoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.priority}>
        Priority:{' '}
        <Text
          style={
            item.priority === 'H'
              ? styles.highPriority
              : item.priority === 'M'
              ? styles.mediumPriority
              : styles.lowPriority
          }>
          {item.priority}
        </Text>
      </Text>
      <Text style={styles.status}>
        Status: {item.completed ? 'Completed' : 'Pending'}
      </Text>
      <Text style={styles.dateTime}>
        Date Assigned: {new Date(item.dateTime).toLocaleString()}
      </Text>
      <Text style={styles.deadline}>
        Deadline: {new Date(item.deadline).toLocaleString()}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Complete"
          onPress={() => handleComplete(item._id, item.title)}
          disabled={item.completed}
        />
        <Button
          title="Delete"
          color="red"
          onPress={() => handleDelete(item._id, item.title)}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={filteredTodos}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        ListHeaderComponent={
          <TodoHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            pendingCount={pendingCount}
            completedCount={completedCount}
          />
        }
        ListEmptyComponent={
          <View style={styles.noTodosContainer}>
            <Text style={styles.noTodosText}>No todos added</Text>
          </View>
        }
        contentContainerStyle={styles.container}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('AddTodo')}
      />
    </SafeAreaView>
  );
};

export default Todos;
