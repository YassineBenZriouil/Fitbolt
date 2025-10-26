import React from 'react';
import {
    NavigationContainer,
    createNavigationContainerRef,
} from '@react-navigation/native';
import BottomTabNavigator from '@/routes/BottomTabNavigator/BottomTabNavigator';

const navigationRef = createNavigationContainerRef();

const Navigation: React.FC = () => {
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <BottomTabNavigator />
            </NavigationContainer>
        </>
    );
};

export default Navigation;
