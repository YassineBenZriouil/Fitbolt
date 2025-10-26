import MMKVStorage from 'react-native-mmkv-storage';

export const storage = new MMKVStorage.Loader().initialize();

export const ThemeStorage = {
    get: () => storage.getString('theme'),
    set: (theme: 'light' | 'dark') => storage.setString('theme', theme),
    delete: () => storage.removeItem('theme'),
};
