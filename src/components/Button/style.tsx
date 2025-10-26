import { ScaledSheet } from 'react-native-size-matters';
import { Theme } from '../../theme/themes';

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        button: {
            backgroundColor: '#4CAF50',
            paddingVertical: '12@vs',
            paddingHorizontal: '20@s',
            borderRadius: '8@s',
            alignItems: 'center',
            justifyContent: 'center',
        },
        disabledButton: {
            backgroundColor: '#A5D6A7',
        },
        buttonText: {
            color: '#fff',
            fontSize: '16@s',
            fontWeight: '600',
        },
        content: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            marginRight: '0@s',
        },
    });

export default createStyles;
