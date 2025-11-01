import React, { useContext } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { ThemeContext } from '@/theme/themeProvider';
import createStyles from './style';

interface InputProps extends TextInputProps {
    // Additional props can be added here if needed
}

const Input: React.FC<InputProps> = (props) => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return <TextInput style={[styles.input, props.style]} {...props} />;
};

export default Input;