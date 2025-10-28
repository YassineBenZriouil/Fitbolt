import { ScaledSheet } from 'react-native-size-matters/extend';
import { Theme } from '@/theme/themes';

const createStyles = (theme: Theme) =>
    ScaledSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10@ms',
            backgroundColor: theme.background,
            borderBottomWidth: '1@ms',
            borderBottomColor: theme.highlight,
        },
        textcontainer: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        leftside: {
            flexDirection: 'row',
            gap: '10@ms',
        },

        headerContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            color: theme.text,
            fontSize: '14@ms',
            fontWeight: 'bold',

            flex: 1,
        },
        username: {
            color: theme.text,
            fontSize: '10@ms',
            textTransform: 'uppercase',
        },
        button: {
            padding: '10@ms',
        },
        menuIcon: {
            width: '35@ms',
            color: theme.text,
        },
        moreIcon: {
            width: '30@ms',
            color: theme.text,
        },
    });

export default createStyles;
