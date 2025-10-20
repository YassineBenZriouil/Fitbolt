// navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routesConfig';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            {Routes.map(route => (
                <Stack.Screen name={route.name} component={route.component} />
            ))}
        </Stack.Navigator>
    );
};

export default AppNavigator;
