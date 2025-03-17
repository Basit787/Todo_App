import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {lazy, Suspense} from 'react';
import LoadingScreen from '../components/Loading';

const Signin = lazy(() => import('../screens/auth/Signin'));
const Signup = lazy(() => import('../screens/auth/Signup'));
const Home = lazy(() => import('../screens/Home'));
const AddTodoForm = lazy(() => import('../screens/todo/AddTodos'));

const Stack = createNativeStackNavigator();

const withSuspense = (
  Component: React.LazyExoticComponent<React.ComponentType<any>>,
) => {
  return function WithSuspenseWrapper(props: any) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Signin" component={withSuspense(Signin)} />
    <Stack.Screen name="Signup" component={withSuspense(Signup)} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={withSuspense(Home)} />
    <Stack.Screen
      name="AddTodo"
      component={withSuspense(AddTodoForm)}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <MainStack /> : <AuthStack />;
};

export default AppNavigator;
