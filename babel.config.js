module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@hooks': './src/Hooks',
          '@modules': './src/Modules',
          '@navigations': './src/Navigations/',
          '@screens': './src/Screens',
          '@stores': './src/Stores',
          '@themes': './src/Themes',
          '@utils': './src/Utils',
        },
      },
    ],
  ],
};
