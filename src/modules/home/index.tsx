import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext } from '../../theme/themeProvider';
import { createStyles } from './style';

const Home: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = createStyles(theme); // generate styles using current theme

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello From Home</Text>
            <View style={styles.button}>
                <Button
                    title="Toggle Theme"
                    color={theme.primary}
                    onPress={toggleTheme}
                />
            </View>
        </View>
    );
};

export default Home;
