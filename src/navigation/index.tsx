import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from '../screens/TodoListScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';

const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
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
