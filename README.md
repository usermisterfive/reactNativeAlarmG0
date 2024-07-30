# Welcome to your Expo app 👋

Alarm clock on React Native and Expo.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Issues

. "Set Alarm" should set "Alarm set to" value.

. verifyTime should output false when InputText is empty.

. there should be one alarm. setTimout may set several ones.

. alarm set to value should only be displayed when alarm was enabled.

+ date1 should be defined.
  app\(tabs)\index.tsx:42 Uncaught (in promise) ReferenceError: date1 is not defined

. on iphone "Alarm set to" should not collide with task bar.

. with dark theme on android and web hours and minutes values should be white.

. verify that after alarm was set and the app goes to background, the sound plays.

. add an option to choose a file to play.
