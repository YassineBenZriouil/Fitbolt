import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import createStyles from './style';
import { ThemeContext } from '@/theme/themeProvider';
import Button from '@/components/Button';
import ThemeButton from '@/components/ThemeButton';
import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';

const Home: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handleToggleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    return (
        <>
            <Header onToggleSideBar={handleToggleSideBar} />
            <View style={styles.container}>
                <Text style={styles.text}>Hello From Home</Text>
                <ThemeButton />
                <Button
                    text="Go to Profile"
                    navigateTo="Profile"
                    style={styles.navButton}
                />
                <Button
                    navigateTo="Settings"
                    style={styles.navButton}
                    text="Go to Settings"
                />
            </View>
            <SideBar isOpen={sideBarOpen} onClose={() => setSideBarOpen(false)} />
        </>
    );
};

export default Home;
