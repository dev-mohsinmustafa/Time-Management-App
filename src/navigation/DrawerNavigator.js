import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mohsin from '../screens/mohsin/Mohsin';


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Mohsin' component={Mohsin} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

const styles = StyleSheet.create({})