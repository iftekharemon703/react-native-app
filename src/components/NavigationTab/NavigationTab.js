import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePlaces from '../SharePlaces/SharePlaces';
import FindPlaces from '../FindPlaces/FindPlaces';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const NavigationTab = props => {
    return (
        <Tab.Navigator>
        <Tab.Screen
            name="Share Places"
            component={SharePlaces}
            options={{
                tabBarIcon:() =><Icon size={ 20 } name={ 'share' } color={ 'blue' }/>
            }}
        />
            <Tab.Screen
                name="Find Places" 
                component={FindPlaces}
                options={{
                    tabBarIcon:() =><Icon size={ 20 } name={ 'map' } color={ 'blue' }/>
                }}
            />
        </Tab.Navigator>
    );
};

export default NavigationTab;