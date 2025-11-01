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
        title: {
            fontSize: '20@ms',
            color: theme.text,
            marginBottom: '30@ms',
        },
        submitButton: {
            backgroundColor: theme.text,
            paddingHorizontal: '20@ms',
            paddingVertical: '10@ms',
            borderRadius: '8@ms',
            marginBottom: '15@ms',
        },
        submitButtonText: {
            color: theme.background,
            fontSize: '16@ms',
            fontWeight: 'bold',
        },
    });

export default createStyles;
