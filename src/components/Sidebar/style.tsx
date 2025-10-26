import { ScaledSheet } from 'react-native-size-matters/extend';
import { Theme } from '@/theme/themes';
import { Dimensions } from 'react-native';

const { width: deviceWidth } = Dimensions.get('window');
const sidebarWidth = deviceWidth * 0.75;

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: deviceWidth,
            height: '100%',
            flexDirection: 'row',
        },
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)', // darkens the rest of the screen
        },
        sidebar: {
            width: sidebarWidth,
            height: '100%',
            backgroundColor: theme.background,
            padding: '20@ms',
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 8,
        },
        header: {
            marginBottom: '20@ms',
        },
        title: {
            fontSize: '18@ms',
            fontWeight: 'bold',
            color: theme.text,
            marginBottom: '5@ms',
        },
        username: {
            fontSize: '14@ms',
            color: theme.text,
            marginBottom: '10@ms',
        },
        menu: {
            flex: 1,
        },
        menuItem: {
            marginBottom: '10@ms',
        },
        logoutButton: {
            marginBottom: '15@ms',
        },
    });

export default createStyles;
