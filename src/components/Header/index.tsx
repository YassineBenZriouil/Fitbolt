import React, { useContext } from 'react';
import { View, Text } from 'react-native';
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

    return (
        <View style={styles.container}>
            <View>
                <Button onPress={onToggleSideBar} icon={<MenuIcon />} />
                <View>
                    <Text style={styles.title}>Welcom</Text>
                    <Text style={styles.username}>{username}</Text>
                </View>
            </View>
            <Button onPress={HandleMore} icon={<MoreIcon />} />
        </View>
    );
};

export default Header;
