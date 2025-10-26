import { ScaledSheet } from 'react-native-size-matters/extend';
import { Theme } from '@/theme/themes';

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.background,
        },
        text: {
            fontSize: '20@ms',
            color: theme.text,
            marginBottom: '30@ms',
        },
        toggleButton: {
            backgroundColor: theme.primary,
            paddingHorizontal: '20@ms',
            paddingVertical: '10@ms',
            borderRadius: '8@ms',
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: '16@ms',
            fontWeight: 'bold',
        },
    });

export default createStyles;
