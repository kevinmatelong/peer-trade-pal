
# Android App Setup

This project has been configured to run as a native Android application using Capacitor.

## Prerequisites

- Node.js and npm installed
- Android Studio installed
- Android SDK installed and configured
- Git installed

## Setup Instructions

1. Transfer the project to your own Github repository via the "Export to Github" button
2. Git pull the project from your own Github repository
3. Run `npm install` to install all dependencies
4. Run `npm run build` to build the web application
5. Initialize Android platform (first time only):
   ```bash
   npx cap add android
   ```
6. Sync the web build with the Android project:
   ```bash
   npx cap sync android
   ```
7. Open the project in Android Studio:
   ```bash
   npx cap open android
   ```
   
   Or run directly on a connected device or emulator:
   ```bash
   npx cap run android
   ```

## Development Workflow

1. Make changes to your web application code
2. Run `npm run build` to rebuild the web application
3. Run `npx cap sync android` to sync changes to the Android project
4. Run `npx cap run android` to see your changes on a device or emulator

## Troubleshooting

- If you encounter build errors, make sure Android Studio and Android SDK are properly installed
- Ensure you have the correct Android SDK version installed (API level 30+ recommended)
- Check that your device is properly connected and USB debugging is enabled (if using a physical device)
- For hot reload during development, use the server URL in capacitor.config.ts

## Notes

- The Android app is configured to use the URL: https://1265d277-7006-43ef-aaec-07794c11eeaa.lovableproject.com?forceHideBadge=true
- This allows you to see changes in real-time without rebuilding the app
- For production deployment, you would need to build the app without the server URL configuration
