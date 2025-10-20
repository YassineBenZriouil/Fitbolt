# Fitbolt Agent Guidelines

## Commands

-   **Build**: `npm run android` / `npm run ios`
-   **Start**: `npm run start`
-   **Lint**: `npm run lint`
-   **Test**: `npm run test`
-   **Single test**: `npm run test -- --testPathPattern=<filename>`

## Code Style

-   **Language**: TypeScript with React Native
-   **Imports**: React first, then third-party, then local imports
-   **Formatting**: Single quotes, trailing commas, 4-space tabs
-   **Naming**: PascalCase for components, camelCase for files/functions
-   **Styling**: ScaledSheet from react-native-size-matters (responsive scaling)
-   **Theming**: Light/dark theme support with Theme interface
-   **Types**: Strict TypeScript, use interfaces for theme objects
-   **Error handling**: Standard try/catch, no custom patterns observed
-   **Testing**: Jest with React Test Renderer, async act() wrapper
