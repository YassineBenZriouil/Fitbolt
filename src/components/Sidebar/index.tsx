import React, { useContext, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import createStyles from './style';
import { ThemeContext } from '@/theme/themeProvider';
import Button from '@/components/Button';
import MoreIcon from '@/assets/icons/more';
import MenuIcon from '@/assets/icons/menu';

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
    profileImg?: string;
    username?: string;
    email?: string;
    routes?: {
        name: string;
        route: string;
        icon: React.ReactNode;
    }[];
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
    const DefaultProfileImg = require('@/assets/img/default/profile.png');

    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const { width: deviceWidth } = Dimensions.get('window');
    const sidebarWidth = deviceWidth * 0.75;

    const translateX = useRef(new Animated.Value(isOpen ? 0 : -sidebarWidth)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: isOpen ? 0 : -sidebarWidth,
            duration: 300,
            useNativeDriver: true,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: false }
    );

    const onHandlerStateChange = (event: any) => {
        if (event.nativeEvent.state === State.END) {
            if (translateX._value < -sidebarWidth / 2) {
                onClose();
            } else {
                Animated.spring(translateX, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        }
    };

    const HandleClick = () => {
        //directing the user and closing the sidebar
        onClose();
    };
    const Handlelogout = () => {
        //Calling logout func and closing the sidebar and redirecting to login page
        onClose();
    };

    const Routes = [
        {
            name: 'Home',
            route: '/',
            icon: <MenuIcon />,
        },
        {
            name: 'Profile',
            route: '/profile',
            icon: <MenuIcon />,
        },
        {
            name: 'Settings',
            route: '/settings',
            icon: <MenuIcon />,
        },
    ];
    const userData = {
        profileImg: DefaultProfileImg,
        username: 'yassine ben abdallah',
        email: 'yassine@gmail.com',
    };

    if (!isOpen) return null;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.overlay} onPress={onClose} />
            <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
                <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
                    <View style={styles.header}>
                        <Image
                            source={userData.profileImg}
                            style={styles.profileImg}
                        />
                        <Text style={styles.username}>{userData.username}</Text>
                        <Text style={styles.email}>{userData.email}</Text>
                    </View>
                    <View style={styles.splitter} />
                    <View style={styles.menu}>
                        {Routes.map((route, index) => (
                            <TouchableOpacity key={index} style={styles.menuItem} onPress={HandleClick}>
                                {route.icon}
                                <Text>{route.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.logoutButton}>
                        <Button onPress={Handlelogout} icon={<MoreIcon />} />
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

export default SideBar;
