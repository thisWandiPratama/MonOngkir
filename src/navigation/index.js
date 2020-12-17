import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../containers/home'
import CekOngkir from '../containers/cekOngkir'


const Stack = createStackNavigator()

const Stacks = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name = "Home" component={Home}/>
                <Stack.Screen name = "CekOngkir" component={CekOngkir}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Stacks