import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '@/theme/themeProvider';
import createStyles from './style';
import Button from '@/components/Button';
import Input from '@/components/Input';

const Signup = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    console.log('Signup Clicked');

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Signup</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <Input placeholder="Email" style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <Input placeholder="Password" style={styles.input} />
                </View>
            </View>

            <Button
                text="Signup"
                onPress={() => console.log('Signup pressed')}
                style={styles.submitButton}
                textStyle={styles.submitButtonText}
            />
        </View>
    );
};

export default Signup;
