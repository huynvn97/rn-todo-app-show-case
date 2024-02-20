import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from '../screens/TodoListScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        /> */}

        <Stack.Screen
          name="TodoListScreen"
          component={TodoListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="TodoDetailScreen" component={TodoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
