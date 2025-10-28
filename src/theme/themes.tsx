export interface Theme {
    background: string;
    text: string;
    primary: string;
    shadow: string;
    highlight: string;
}

export const lightTheme: Theme = {
    background: '#ffffffff', // Cool Gray
    text: '#000000ff', // Jet Black
    primary: '#0077FF', // Vivid Blue
    shadow: '#111111', // Jet Black
    highlight: '#FFDD00', // Electric Yellow
};

export const darkTheme: Theme = {
    background: '#000000ff', // Jet Black
    text: '#ffffffff', // White
    primary: '#0077FF', // Vivid Blue
    shadow: '#FFFFFF', // White
    highlight: '#FFDD00', // Electric Yellow
};
