import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyles from './style';
import { ThemeContext } from '../../theme/themeProvider';

const Profile: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello From Profile</Text>
        </View>
    );
};

export default Profile;
