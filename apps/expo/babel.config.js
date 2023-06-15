module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
      'react-native-paper/babel',
      'nativewind/babel',
      '@babel/plugin-proposal-export-namespace-from',
      [
        '@babel/plugin-proposal-private-property-in-object',
        {
          loose: true,
        },
      ],
      // [
      //   '@babel/plugin-proposal-class-properties',
      //   {
      //     loose: true,
      //   },
      // ],
      [
        '@babel/plugin-proposal-private-methods',
        {
          loose: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'solito/image': 'solito/image/expo',
          },
        },
      ],
    ],
  }
}
