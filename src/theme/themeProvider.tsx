import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { lightTheme, darkTheme, Theme } from './themes';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: lightTheme,
});

interface Props {
    children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const colorScheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState<Theme>(
        colorScheme === 'dark' ? darkTheme : lightTheme,
    );

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
        });

        // cleanup
        return () => subscription.remove();
    }, []);

    const toggleTheme = () => {
        setTheme(prev => (prev === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
