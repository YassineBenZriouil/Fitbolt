// theme.ts
export interface Theme {
    background: string;
    text: string;
    primary: string;
}

export const lightTheme: Theme = {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007AFF',
};

export const darkTheme: Theme = {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#0A84FF',
};
