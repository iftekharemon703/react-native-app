import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login/Login';
import NavigationTab from './src/components/NavigationTab/NavigationTab';
import { navigate, navigationRef } from './src/NavigationRoot';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login} 
          />
          <Stack.Screen 
            name="Places" 
            component={NavigationTab} 
            options={{
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity onPress={() => {
                  navigate("Login")
                }}>
                  <Icon name="power-off" size={26} style={{paddingRight: 20, color: "#d63031"}}/>
                </TouchableOpacity>
              )
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

