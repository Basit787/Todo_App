import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import styles from './ProfileStyles';

interface User {
  id: string;
  name: string;
  email: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleClick = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>This is Profile</Text>
      <Card style={styles.card}>
        <Text style={styles.text}>Username: {user?.name ?? 'Loading...'}</Text>
        <Text style={styles.text}>
          User email: {user?.email ?? 'Loading...'}
        </Text>
      </Card>
      <Button
        style={styles.logoutButton}
        mode="contained"
        onPress={handleClick}>
        Logout
      </Button>
    </View>
  );
};

export default Profile;
