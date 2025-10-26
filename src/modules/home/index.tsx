import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import createStyles from './style';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ThemeContext } from '@/theme/themeProvider';
import Button from '@/components/Button';
import ThemeButton from '@/components/ThemeButton';

type RootStackParamList = {
    Profile: undefined;
    Settings: undefined;
};

const Home: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
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
            ></Button>
        </View>
    );
};

export default Home;
