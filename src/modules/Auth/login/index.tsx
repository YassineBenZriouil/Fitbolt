import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '@/theme/themeProvider';
import createStyles from './style';
import Button from '@/components/Button';

const Login = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    console.log('Login Clicked');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View>
                <Text>Email</Text>
            </View>
            <Button
                text="Login"
                onPress={() => console.log('Login pressed')}
                style={styles.submitButton}
                textStyle={styles.submitButtonText}
            />
        </View>
    );
};

export default Login;
