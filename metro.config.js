// Expo Metro configuration
// https://docs.expo.dev/guides/monorepos/#configure-the-metro-bundler

const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const { resolver } = config;

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts,
  sourceExts: resolver.sourceExts,
  alias: {
    ...(resolver?.alias || {}),
    "@": path.resolve(__dirname, "src"),
  },
};

module.exports = config;
