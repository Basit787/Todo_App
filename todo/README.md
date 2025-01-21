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

- Create, Read and Delete todos
- Mark tasks as completed
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
   git clone https://github.com/Basit787/Todo_App.git
   cd todo
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
├── apis/    # Api instance
├── components/    # Reusable components
├── screens/       # Screen components
├── utils/        # Utility functions
└── zod/        # validations
```

**Key Features Implementation:**

- **Todo Management:**
  - Create new todos with title and description
  - Mark todos as completed
  - Delete todos

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
