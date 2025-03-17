import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Card, Searchbar, Text} from 'react-native-paper';
import styles from './TodoHeaderStyles';

interface TodoHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  pendingCount: number;
  completedCount: number;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({
  searchQuery,
  setSearchQuery,
  pendingCount,
  completedCount,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const getUserDetails = async () => {
    // try {
    //   const result = await ApiInstance.get('/user/getUserDetails');
    //   setUser(result?.data?.result);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Hello {user?.name} 👋</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <View style={styles.cardContainer}>
        <Card style={[styles.card, styles.cardRed]}>
          <View style={styles.cardText}>
            <Text style={styles.cardNumber}>Pending</Text>
            <Text style={styles.cardNumber}>{pendingCount}</Text>
          </View>
        </Card>
        <Card style={[styles.card, styles.cardGreen]}>
          <View style={styles.cardText}>
            <Text style={styles.cardNumber}>Completed</Text>
            <Text style={styles.cardNumber}>{completedCount}</Text>
          </View>
        </Card>
      </View>
      <View>
        <Text style={styles.todosTitle}>Your Todos</Text>
      </View>
    </View>
  );
};

export default TodoHeader;
