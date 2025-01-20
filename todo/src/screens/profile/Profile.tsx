import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import ApiInstance from '../../apis/request';
import {SnackbarContext} from '../../components/Snackbar';
import {clearToken} from '../../utils/tokenHandler';
import styles from './ProfileStyles';

interface User {
  id: string;
  name: string;
  email: string;
}

const Profile = ({navigation}: {navigation: any}) => {
  const [user, setUser] = useState<User | null>(null);

  const {showSnackbar} = useContext(SnackbarContext);

  const getUserDetails = async () => {
    try {
      const result = await ApiInstance.get('/user/getUserDetails');
      setUser(result?.data?.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleClick = async () => {
    await clearToken();
    navigation.navigate('NavigationRoutes');
    showSnackbar('Logout Sucessfully');
  };

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
