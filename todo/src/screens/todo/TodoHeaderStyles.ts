import {StyleSheet} from 'react-native';

const HeaderStyles = StyleSheet.create({
  container: {
    margin: 16,
  },
  greetingText: {
    margin: 20,
    fontWeight: '800',
    fontSize: 20,
  },
  searchBar: {
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '45%',
    padding: 20,
    borderRadius: 8,
  },
  cardRed: {
    backgroundColor: 'red',
  },
  cardGreen: {
    backgroundColor: 'green',
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  todosTitle: {
    margin: 20,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
  },
});

export default HeaderStyles;
