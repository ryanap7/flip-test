module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@hooks': './src/Hooks',
          '@navigations': './src/Navigations',
          '@screens': './src/Screens',
          '@stores': './src/Stores',
          '@themes': './src/Themes',
          '@types': './src/Types',
          '@utils': './src/Utils',
        },
      },
    ],
  ],
};
