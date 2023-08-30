import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Hello from '../screens/hello/Hello';
import Onboarding from '../screens/onboarding/Onboarding';
import DrawerNavigator from './DrawerNavigator';


const Stack = createNativeStackNavigator();




const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        initialRouteName="Home">

        <Stack.Screen
          name="Hello"
          component={Hello}
        // options={{title: 'Welcome to Splash Screen'}}
        />

        
        <Stack.Screen name="Onboarding" component={Onboarding}
          options={{ animation: "slide_from_bottom" }}
        />
       
      

        <Stack.Screen name='Home' component={TabNavigator} />
        <Stack.Screen name='Mohsin' component={DrawerNavigator} />

        {/* <Stack.Screen name='SearchUserPage' component={SearchUserPage}
          options={{ animation: "simple_push" }}
        /> */}
    

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainNavigator