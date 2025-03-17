import {StyleSheet} from 'react-native';

const TodoStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  todoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  priority: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  highPriority: {
    color: 'red',
  },
  mediumPriority: {
    color: '#8c8100',
  },
  lowPriority: {
    color: 'green',
  },
  status: {
    fontSize: 16,
    marginBottom: 8,
    color: '#007bff',
  },
  dateTime: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  deadline: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  noTodosContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noTodosText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default TodoStyles;
