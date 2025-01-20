import {StyleSheet} from 'react-native';

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    padding: 10,
  },
  card: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 300,
    borderRadius: 50,
  },
});

export default ProfileStyles;
