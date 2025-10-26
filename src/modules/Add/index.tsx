import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import createStyles from './style';
import { ThemeContext } from '@/theme/themeProvider';
import Button from '@/components/Button';
import ThemeButton from '@/components/ThemeButton';

const AddFit: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello From AddFit</Text>
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
    );
};

export default AddFit;
