import { ScaledSheet } from 'react-native-size-matters/extend';
import { Theme } from '@/theme/themes';

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15@ms',
            backgroundColor: theme.background,
            borderBottomWidth: '1@ms',
            borderBottomColor: theme.highlight,
        },
        headerContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            color: theme.text,
            fontSize: '18@ms',
            fontWeight: 'bold',
            textAlign: 'center',
            flex: 1,
        },
        username: {
            color: theme.text,
            fontSize: '12@ms',
            textAlign: 'center',
        },
        button: {
            padding: '10@ms',
        },
        icon: {
            width: '24@ms',
            height: '24@ms',
            tintColor: theme.text,
        },
    });

export default createStyles;
