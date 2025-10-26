import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyles from './style';
import { ThemeContext } from '../../theme/themeProvider';

const Settings: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello From Settings</Text>
            <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
                <Text style={styles.buttonText}>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;
