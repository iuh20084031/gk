import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenAdd from './src/screens/ScreenAdd';
import ScreenUpdate from './src/screens/ScreenUpdate';
import ScreenLogin from './src/screens/ScreenLogin';
import ScreenHome from './src/screens/ScreenHome';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='login' component={ScreenLogin} options={{ headerShown: false }} />
          <Stack.Screen name='home' component={ScreenHome} />
          <Stack.Screen name='add' component={ScreenAdd} />
          <Stack.Screen name='update' component={ScreenUpdate} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
