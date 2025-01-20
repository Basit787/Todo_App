import {StyleSheet} from 'react-native';

const AddTodoStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  view: {display: 'flex', gap: 20},
  heading: {
    margin: 20,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
});

export default AddTodoStyles;
