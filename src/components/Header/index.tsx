import React from 'react';
import { View, Text } from 'react-native';
import createStyles from './style';
import { Theme } from '@/theme/themes';
import Button from '@/components/Button';
import MoreIcon from '@/assets/icons/more';
import MenuIcon from '@/assets/icons/menu';
import { useState } from 'react';

interface HeaderProps {
    theme: Theme;
    username?: string;
}

const Header: React.FC<HeaderProps> = ({ theme, username }) => {
    const styles = createStyles(theme);

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const HandleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };
    const HandleMore = () => {};

    return (
        <View style={styles.container}>
            <View>
                <Button onPress={HandleSideBar} icon={<MenuIcon />} />
                <Text style={styles.title}>Welcom</Text>
                <Text style={styles.username}>{username}</Text>
            </View>
            <Button onPress={HandleMore} icon={<MoreIcon />} />
            {/* <SideBar/> */}
        </View>
    );
};

export default Header;
