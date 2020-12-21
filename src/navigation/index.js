import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../containers/home'
import Local from '../containers/cekOngkirLocal'
import Global from '../containers/cekOngkirGlobal'
import Tracking from '../containers/tracking'
import ResultsLocal from '../containers/cekOngkirLocal/results' 

const Stack = createStackNavigator()

const Stacks = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name = "Home" component={Home}/>
                <Stack.Screen name = "Local" component={Local}/>
                <Stack.Screen name = "Global" component={Global}/>
                <Stack.Screen name = "Tracking" component={Tracking}/>
                <Stack.Screen name = "ResultsLocal" component={ResultsLocal}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Stacks