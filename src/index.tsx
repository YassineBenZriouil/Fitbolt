import React from 'react';
import Navigation from './routes/index';
import { ThemeProvider } from './theme/themeProvider';

const Main = () => {
    return (
        <ThemeProvider>
            <Navigation />
        </ThemeProvider>
    );
};

export default Main;
