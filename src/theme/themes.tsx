// theme.ts
export interface Theme {
    background: string;
    text: string;
    primary: string;
}

export const lightTheme: Theme = {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007bffff',
};

export const darkTheme: Theme = {
    background: '#000000ff',
    text: '#ffffffff',
    primary: '#ff0000ff',
};
