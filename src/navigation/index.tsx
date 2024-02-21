import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from '../screens/TodoListScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import {useAppSelector} from '../hooks/redux';

const Stack = createNativeStackNavigator();

export function RootNavigation() {
  const isLoggedIn = useAppSelector(state => state.auth.loggedUsers.length);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="TodoListScreen"
              component={TodoListScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TodoDetailScreen"
              component={TodoDetailScreen}
            />

            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
