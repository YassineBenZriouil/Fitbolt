jest.mock('react-native-mmkv-storage', () => ({
  Loader: jest.fn().mockImplementation(() => ({
    initialize: jest.fn().mockReturnValue({
      getString: jest.fn(),
      setString: jest.fn(),
    }),
  })),
}));