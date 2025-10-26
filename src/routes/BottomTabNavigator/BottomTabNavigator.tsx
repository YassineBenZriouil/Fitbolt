import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '@/assets/icons/home';
import ProfileIcon from '@/assets/icons/profile';
import GearIcon from '@/assets/icons/gear';
import PlusIcon from '@/assets/icons/plus';
import Routes from '@/routes/routesConfig';
import { ThemeContext } from '@/theme/themeProvider';
import createTabBarStyles from './style';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, color: string, size: number) => {
    switch (routeName) {
        case 'Home':
            return <HomeIcon size={size} color={color} />;
        case 'Profile':
            return <ProfileIcon size={size} color={color} />;
        case 'Settings':
            return <GearIcon size={size} color={color} />;
        case 'AddFit':
            return <PlusIcon size={size} color={color} />;
        default:
            return null;
    }
};

const BottomTabNavigator: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createTabBarStyles(theme);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) =>
                    getTabIcon(route.name, color, size),
                tabBarActiveTintColor: theme.primary,
                tabBarInactiveTintColor: theme.text,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                headerShown: false,
            })}
        >
            {Routes.map(route => (
                <Tab.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        tabBarLabel:
                            route.name === 'AddFit' ? 'Add' : route.name,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
