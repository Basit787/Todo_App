// Home.tsx
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Profile from './profile/Profile';
import Todos from './todo/Todos';

type SceneProps = {
  route: {key: string};
  jumpTo: (key: string) => void;
  navigation: NavigationProp<ParamListBase>;
};

// Update the wrapper components to pass navigation
const TodosWrapper: React.FC<SceneProps> = ({navigation, ...props}) => (
  <Todos navigation={navigation} {...props} />
);

const ProfileWrapper: React.FC<SceneProps> = ({navigation, ...props}) => (
  <Profile navigation={navigation} {...props} />
);

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'todos',
      title: 'Todos',
      focusedIcon: 'view-list',
      unfocusedIcon: 'view-list-outline',
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  // Create scene rendering function that includes navigation
  const renderScene = BottomNavigation.SceneMap({
    todos: props => <TodosWrapper {...props} navigation={navigation} />,
    profile: props => <ProfileWrapper {...props} navigation={navigation} />,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
