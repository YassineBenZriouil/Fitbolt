import { ScaledSheet } from 'react-native-size-matters/extend';

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    text: {
        fontSize: '20@ms',
        color: '#fff',
    },
});

export default styles;
