import React from 'react';
import { View, Text } from 'react-native';
import createStyles from './style';
import { Theme } from '@/theme/themes';
import Button from '@/components/Button';
import MoreIcon from '@/assets/icons/more';
import MenuIcon from '@/assets/icons/menu';

interface SideBarProps {
    theme: Theme;
    profileImg?: string;
    username?: string;
    email?: string;
    routes?: {
        name: string;
        route: string;
        icon: React.ReactNode;
    }[];
}

const SideBar: React.FC<SideBarProps> = ({ theme, username }) => {
    const styles = createStyles(theme);

    const HandleClick = () => {
        //directing the user and closing the sidebar
    };
    const Handlelogout = () => {
        //Calling logout func and closing the sidebar and redirecting to login page
    };

    return (
        <View style={styles.container}>
            <View>
                <Button onPress={HandleClick} icon={<MenuIcon />} />
                <Text style={styles.title}>Welcom</Text>
                <Text style={styles.username}>{username}</Text>
            </View>
            <Button onPress={Handlelogout} icon={<MoreIcon />}></Button>
        </View>
    );
};

export default SideBar;
