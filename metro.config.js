const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add shared folder to watchFolders so Metro watches for changes
config.watchFolders = [
  path.resolve(__dirname, '../shared')
];

// Add shared folder to extraNodeModules for module resolution
config.resolver.extraNodeModules = {
  '@mudahbisness/shared': path.resolve(__dirname, '../shared/src')
};

module.exports = withNativeWind(config, { input: './global.css' });
