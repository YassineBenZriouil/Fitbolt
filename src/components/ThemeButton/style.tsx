import { ScaledSheet } from 'react-native-size-matters';
import { Theme } from '@/theme/themes';

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        toggleButton: {
            backgroundColor: theme.primary,
            paddingHorizontal: '20@ms',
            paddingVertical: '10@ms',
            borderRadius: '8@ms',
            marginBottom: '15@ms',
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: '16@ms',
            fontWeight: 'bold',
        },
        icon: {
            marginRight: '8@ms',
        },
    });

export default createStyles;
