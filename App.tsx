import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Main from './src/index';

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                <Main />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

export default App;
