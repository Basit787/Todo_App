# React Native Todo App

A mobile application built with React Native that helps users manage their daily tasks efficiently.

## Technologies Used

**Frontend:**

- React Native
- TypeScript
- React Navigation
- AsyncStorage (for local storage)
- React Native Paper (UI components)

## Features

- Create, Read, Update, and Delete todos
- Mark tasks as complete/incomplete
- Persistent storage of todos
- Clean and intuitive user interface
- Cross-platform support (iOS & Android)

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- React Native CLI
- iOS Setup (for iOS development):
  - Xcode
  - CocoaPods
- Android Setup (for Android development):
  - Android Studio
  - Android SDK
  - JDK 11

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies:**

   ```bash
   # using npm
   npm install

   # OR using Yarn
   yarn install
   ```

3. **Install iOS dependencies (iOS development only):**

   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the Application

1. **Start Metro Server:**

   ```bash
   # using npm
   npm start

   # OR using Yarn
   yarn start
   ```

2. **Run on Android:**

   ```bash
   # using npm
   npm run android

   # OR using Yarn
   yarn android
   ```

3. **Run on iOS:**

   ```bash
   # using npm
   npm run ios

   # OR using Yarn
   yarn ios
   ```

## Development

**Project Structure:**

```
src/
├── components/    # Reusable components
├── screens/       # Screen components
├── navigation/    # Navigation configuration
├── services/     # API and other services
├── utils/        # Utility functions
└── types/        # TypeScript type definitions
```

**Key Features Implementation:**

- **Todo Management:**
  - Create new todos with title and description
  - Mark todos as complete/incomplete
  - Edit existing todos
  - Delete todos

- **Data Persistence:**
  - Todos are stored locally using AsyncStorage
  - Automatic data loading on app launch

## Testing

- Run tests:
  ```bash
  npm test
  ```
- Run tests in watch mode:
  ```bash
  npm run test:watch
  ```

## Building for Production

**Android:**

```bash
cd android
./gradlew assembleRelease
```

**iOS:**

1. Open the project in Xcode.
2. Select 'Product' > 'Archive'.
3. Follow the distribution process.

## Troubleshooting

**Common Issues:**

- **Metro Bundler Issues:**
  - Clear metro cache: `npm start -- --reset-cache`
  - Ensure Metro is running in a separate terminal

- **Build Issues:**
  - Clean and rebuild:
    - For Android:
      ```bash
      cd android
      ./gradlew clean
      ```
    - For iOS:
      ```bash
      cd ios
      pod deintegrate
      pod install
      ```

- **Dependency Issues:**
  - Clear node modules:
    ```bash
    rm -rf node_modules
    npm install
    ```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

For more detailed instructions, refer to the [React Native Todo App README](https://github.com/ghoshabhi/react-native-todo-app).  