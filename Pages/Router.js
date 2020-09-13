import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import ListingPage from './listing';
import CartScreen from './cart';
import OrderScreen from './orders';
import ProfileScreen from './profile';

const Stack = createStackNavigator();

function Router() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false
              }}>
                  <Stack.Screen name="ListingPage" component={ListingPage} />
                  <Stack.Screen name="CartScreen" component={CartScreen} />
                  <Stack.Screen name="OrderScreen" component={OrderScreen} />
                  <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;