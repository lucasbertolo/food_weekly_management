import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "food_weekly_management",
  slug: "Controle de Estoque Semanal",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/shared/assets/images/favicon.png",
  scheme: "foodweeklymanagement",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./src/shared/assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.lucasbertolo2.foodweeklymanagement",
  },
  android: {
    package: "com.lucasbertolo2.foodweeklymanagement",
  },
  web: {
    output: "static",
    favicon: "./src/shared/assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./src/shared/assets/images/splash.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
    [
      "expo-camera",
      {
        cameraPermission: "Permitir $(PRODUCT_NAME) acessar sua camera",
      },
    ],
    [
      "expo-image-picker",
      {
        photosPermission:
          "O aplicativo quer acesso para utilizar as imagens da sua galeria",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
});
