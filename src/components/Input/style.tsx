import { ScaledSheet } from 'react-native-size-matters/extend';
import { Theme } from '@/theme/themes';

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        input: {
            width: '100%',
            borderWidth: 1,
            borderColor: theme.text,
            backgroundColor: theme.background,
            color: theme.text,
            padding: '10@ms',
            borderRadius: '5@ms',
            fontSize: '16@ms',
        },
    });

export default createStyles;
