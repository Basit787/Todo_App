import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const LoadingScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" color="#6200ee" />
  </View>
);

export default LoadingScreen;
