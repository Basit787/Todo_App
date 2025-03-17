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

const TodosWrapper: React.FC<SceneProps> = ({navigation, ...props}) => (
  <Todos navigation={navigation} {...props} />
);

const ProfileWrapper: React.FC = () => <Profile />;

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

  const renderScene = BottomNavigation.SceneMap({
    todos: props => <TodosWrapper {...props} navigation={navigation} />,
    profile: () => <ProfileWrapper />,
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
