import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';
import { lightTheme, darkTheme, Theme } from './themes';
import { ThemeStorage } from '@/utils/storage';

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
    const getInitialTheme = (): Theme => {
        const savedTheme = ThemeStorage.get();
        if (savedTheme) {
            return savedTheme === 'dark' ? darkTheme : lightTheme;
        }
        // Fallback to system preference
        const colorScheme = Appearance.getColorScheme();
        return colorScheme === 'dark' ? darkTheme : lightTheme;
    };

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const subscription = Appearance.addChangeListener(
            ({ colorScheme: newColorScheme }) => {
                // Only update if no manual preference is saved
                const savedTheme = ThemeStorage.get();
                if (!savedTheme) {
                    setTheme(
                        newColorScheme === 'dark' ? darkTheme : lightTheme,
                    );
                }
            },
        );

        // cleanup
        return () => subscription.remove();
    }, []);

    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === lightTheme ? darkTheme : lightTheme;
            // Persist the choice
            ThemeStorage.set(newTheme === darkTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
