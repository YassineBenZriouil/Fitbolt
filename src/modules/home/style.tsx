import { ScaledSheet } from 'react-native-size-matters';
import { Theme } from '../../theme/themes';

export const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.background, // dynamic
        },
        text: {
            fontSize: '20@ms',
            color: theme.text, // dynamic
        },
        button: {
            marginTop: '20@ms',
        },
    });
