const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['react-native-rapi-ui']
      }
    },
    argv
  );
  
  // Fix for React 19 compatibility
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web'
  };
  
  return config;
};