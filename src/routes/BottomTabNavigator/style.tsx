import { ScaledSheet } from 'react-native-size-matters/extend';
import { Theme } from '@/theme/themes';

const createTabBarStyles = (theme: Theme) =>
    ScaledSheet.create({
        tabBar: {
            backgroundColor: theme.background,
            borderColor: theme.text,
            height: '60@ms',
            paddingTop: '10@ms',
        },
    });

export default createTabBarStyles;
