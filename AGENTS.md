# Fitbolt Agent Guidelines

## Commands

-   **Build**: `npm run android` / `npm run ios`
-   **Start**: `npm run start`
-   **Lint**: `npm run lint`
-   **Test**: `npm run test`
-   **Single test**: `npm run test -- --testPathPattern=<testFileName>`

## Code Style

-   **Language**: TypeScript with React Native (Node >=20 required)
-   **Imports**: React first, then React Native, then third-party, then local imports
-   **Formatting**: Single quotes, trailing commas, 4-space indentation
-   **Naming**: PascalCase for components, camelCase for files/functions/variables
-   **Styling**: ScaledSheet from react-native-size-matters (responsive scaling with @ms/@s)
-   **Theming**: Light/dark theme support with Theme interface
-   **Types**: Strict TypeScript, use interfaces for complex objects
-   **Error handling**: Standard try/catch blocks
-   **Testing**: Jest with React Test Renderer, wrap renders in async act()
-   **Patches**: Use patch-package for dependency modifications (see patches/ directory)
