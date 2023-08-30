import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from "../constants/theme/theme";



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ratios from "../styles/ratios";
import Home from '../screens/home/Home';
import Timer from '../screens/timer/Timer';
import Profile from '../screens/profile/Profile';
import Settings from '../screens/settings/Settings';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios


const Tab = createBottomTabNavigator();
// Multiple Page Routing
// Very Important Point for multiple screens navigation
// const Stack = createNativeStackNavigator();


const getIconColor = focused => ({
    tintColor: focused ? COLORS.black : COLORS.white
});


// Very Important Point for multiple screens navigation
// const ChannelStack = () => {
// return(
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Channel" component={Channel} />
// </Stack.Navigator>
// )

// }




const TabNavigator = () => {



    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}

            initialRouteName='Home'
        >
            <Tab.Screen name='StartingScreen' component={Home}
                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/home.png")}
                            />
                        </View>
                    )
                }}


            />
            {/* Very Important Point for multiple screens navigation */}
            <Tab.Screen name='Timer' component={Timer}
                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/timer.png")}
                            />
                        </View>
                    )
                }}


            />


            <Tab.Screen name='Profile' component={Profile}

                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/profile.png")}
                            />
                        </View>
                    )
                }}

            />
            <Tab.Screen name='Settings' component={Settings}

                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/settings.png")}
                            />
                        </View>
                    )
                }}

            />

          


        </Tab.Navigator>







    )
}


const styles = StyleSheet.create({
    tabBar: {
        // position: 'absolute',
        // left: 16,
        // right:16,
        // bottom: 22,
        height: 85,
        // width:"100%",
        backgroundColor: "#FFFFFF",
        borderTopColor: "transparent",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,


    },
    tabIconContainer: {
        position: 'absolute',
        // top:12,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 60,
        // width: 45,
        // height: 45,
        backgroundColor: "#FFFFFF"
    }
    , tabIcon: {
        // width: 52,
        // height: 52,


    }
})

export default TabNavigator













// import React, { useState } from 'react'
// // import { View, Text, StyleSheet, Image, Alert } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Screens
// // import HomeScreen from './screens/HomeScreen';
// // import DetailsScreen from './screens/DetailsScreen';
// // import SettingsScreen from './screens/SettingsScreen';
// import Home from '../screens/home/Home';
// import Timer from '../screens/timer/Timer';
// import Profile from '../screens/profile/Profile';
// import Settings from '../screens/settings/Settings';


// //Screen names
// const homeName = "Home";
// const timerName = "Timer";
// const profileName = "Profile";
// const settingsName = "Settings";

// const Tab = createBottomTabNavigator();

// function MainContainer() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={homeName}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = route.name;

//             if (rn === homeName) {
//               iconName = focused ? 'home' : 'home-outline';

//             } else if (rn === detailsName) {
//               iconName = focused ? 'list' : 'list-outline';

//             } else if (rn === settingsName) {
//               iconName = focused ? 'settings' : 'settings-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'grey',
//           labelStyle: { paddingBottom: 10, fontSize: 10 },
//           style: { padding: 10, height: 70}
//         }}>

//         <Tab.Screen name={homeName} component={Home} />
//         <Tab.Screen name={timerName} component={Timer} />
//         <Tab.Screen name={profileName} component={Profile} />
//         <Tab.Screen name={settingsName} component={Settings} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MainContainer;