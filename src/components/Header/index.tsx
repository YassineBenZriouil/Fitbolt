import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyles from './style';
import { ThemeContext } from '@/theme/themeProvider';
import Button from '@/components/Button';
import MoreIcon from '@/assets/icons/more';
import MenuIcon from '@/assets/icons/menu';

interface HeaderProps {
    username?: string;
    onToggleSideBar: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, onToggleSideBar }) => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const HandleMore = () => {};

    const userData = {
        username: 'yassine',
        email: 'yassine@gmail.com',
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftside}>
                <TouchableOpacity onPress={onToggleSideBar}>
                    <MenuIcon
                        color={styles.menuIcon.color}
                        size={styles.menuIcon.width}
                    />
                </TouchableOpacity>
                <View style={styles.textcontainer}>
                    <Text style={styles.title}>WELCOME</Text>
                    <Text style={styles.username}>{userData.username}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onToggleSideBar}>
                <MoreIcon
                    color={styles.moreIcon.color}
                    size={styles.moreIcon.width}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
