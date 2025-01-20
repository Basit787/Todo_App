import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';
import AddTodoForm from './screens/todo/AddTodos';

const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="NavigationRoutes"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="AddTodo"
        component={AddTodoForm}
        options={{headerShown: true}}
      />
      <Stack.Screen name="NavigationRoutes" component={NavigationRoutes} />
    </Stack.Navigator>
  );
};

export default App;
