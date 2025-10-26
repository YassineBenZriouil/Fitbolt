import React from 'react';
import {
    TouchableOpacity,
    Text,
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
    View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import createStyles from './style';

interface ButtonProps {
    text?: string;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    navigateTo?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onPress,
    disabled = false,
    icon,
    style,
    textStyle,
    navigateTo,
}) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const styles = createStyles();

    const handlePress = (event: GestureResponderEvent) => {
        if (disabled) return;
        if (navigateTo) {
            navigation.navigate(navigateTo);
        } else if (onPress) {
            onPress(event);
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton, style]}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <View style={styles.content}>
                {icon && <View style={styles.icon}>{icon}</View>}
                <Text style={[styles.buttonText, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
