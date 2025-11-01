import { ScaledSheet } from 'react-native-size-matters/extend';
import { Theme } from '@/theme/themes';

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.background,
            width: '100%',
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
        formContainer: {
            paddingHorizontal: '20@ms',
            width: '100%',
        },
        label: {
            color: theme.text,
            marginBottom: '8@ms',
        },
        input: {
            borderWidth: 1,
            borderColor: theme.text,
            backgroundColor: theme.background,
            color: theme.text,
            padding: '10@ms',
            borderRadius: '5@ms',
            fontSize: '16@ms',
            width: '100%',
        },
        inputContainer: {
            width: '100%',
            marginBottom: '15@ms',
        },
    });

export default createStyles;
