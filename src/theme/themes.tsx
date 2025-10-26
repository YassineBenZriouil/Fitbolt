export interface Theme {
    background: string;
    text: string;
    primary: string;
    shadow: string;
    highlight: string;
}

export const lightTheme: Theme = {
    background: '#E0E0E0', // Cool Gray
    text: '#111111', // Jet Black
    primary: '#0077FF', // Vivid Blue
    shadow: '#111111', // Jet Black
    highlight: '#FFDD00', // Electric Yellow
};

export const darkTheme: Theme = {
    background: '#111111', // Jet Black
    text: '#FFFFFF', // White
    primary: '#0077FF', // Vivid Blue
    shadow: '#FFFFFF', // White
    highlight: '#FFDD00', // Electric Yellow
};
