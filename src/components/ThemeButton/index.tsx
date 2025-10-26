import React, { useContext } from 'react';
import { ThemeContext } from '@/theme/themeProvider';
import { lightTheme } from '@/theme/themes';
import createStyles from './style';
import MoonIcon from '@/assets/icons/moon';
import SunIcon from '@/assets/icons/sun';
import Button from '@/components/Button';

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const Icon = theme === lightTheme ? <MoonIcon /> : <SunIcon />;

    return (
        <Button onPress={toggleTheme} style={styles.toggleButton} icon={Icon} />
    );
};

export default ThemeButton;
