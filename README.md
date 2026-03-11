# Food Weekly Management

A React Native (Expo) app to manage food at home: pantry inventory, weekly meal planning, shopping lists, and recipes.

## Features

- **Calendar** – Weekly/monthly meal planning (lunch, dinner, etc.)
- **Pantry** – Track food at home (pantry, fridge, freezer) with expiration dates
- **Shopping List** – Generated from planned meals + manual items
- **Recipes** – Create, browse, and manage personal recipes
- **Auth** – Email/password with Firebase (login, register, forgot password)

## Tech Stack

- **Expo** (SDK 54) + React Native
- **Expo Router** – File-based routing
- **Firebase** – Auth, Firestore, Storage
- **React Query** – Server state
- **React Hook Form** + **Yup** – Forms & validation
- **React Native Paper** – UI components

## Project Structure

```
src/
├── app/                    # Routes (Expo Router)
├── config/                 # Providers, Firebase, React Query
├── features/               # Feature modules
│   ├── Auth/
│   ├── Home/               # Calendar view
│   ├── MyRecipes/
│   ├── NewRecipes/
│   ├── Pantry/
│   ├── Settings/
│   └── Shopping/
├── migrations/             # Data schema migrations
├── shared/                 # Components, hooks, models, utils
│   ├── components/
│   ├── models/
│   └── utils/
└── docs/                   # Additional documentation
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go (for device testing) or a development build

### Install

```bash
npm install
```

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication** (Email/Password) and **Firestore**
3. Replace `src/config/services/firebase/google-services.json` (Android) and `GoogleService-Info.plist` (iOS) with your project config
4. Update `src/config/services/firebase/firebase-config.ts` with your Firebase config

### Run

```bash
npx expo start
```

Then choose:

- **Expo Go** – Scan QR code on device
- **iOS Simulator** – Press `i` in the terminal
- **Android Emulator** – Press `a` in the terminal

### Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev server |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS |
| `npm run web` | Run in browser |
| `npm run lint` | Run ESLint |
| `npm run prebuild` | Generate native projects |

## Documentation

- [docs/MIGRATION.md](docs/MIGRATION.md) – Recipe ingredients migration guide
- [src/migrations/README.md](src/migrations/README.md) – Migration utilities

## License

Private
