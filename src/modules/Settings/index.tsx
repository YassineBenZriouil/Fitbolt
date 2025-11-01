import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyles from './style';
import { ThemeContext } from '../../theme/themeProvider';

const Settings: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello From Settings</Text>
        </View>
    );
};

export default Settings;
