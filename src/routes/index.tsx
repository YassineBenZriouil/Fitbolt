import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routesConfig';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {Routes.map(route => (
                    <Stack.Screen
                        name={route.name}
                        component={route.component}
                        key={route.name}
                        options={{ headerShown: false }}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
