const { withExpo } = require('@expo/next-adapter')

const { IgnorePlugin } = require('webpack');

/** @type {import('next').NextConfig} */

const rule = {
  test: /postMock.html$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

const nextConfig = {
async redirects() {
    return [
      {
        source: '/works',
        destination: '/work',
        permanent: true,
      },
    ]
  },
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    optimizeCss: true,
  },
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    '@expo/html-elements',
    '@expo/vector-icons',
    'expo-router',
    'react-native-safe-area-context',
    'react-native-vector-icons-for-web',
    'react-native-vector-icons',
    'react-native-gesture-handler',
    'nativewind',
    '@gorhom/bottom-sheet',
    '@shopify/flash-list',
    'recyclerlistview',
    'expo-asset',
    'react-native-size-matters',
    'react-native-responsive-screen',
    'react-native-paper',
    'react-native-svg',
    'zeego',
    'react-native-image-slider-box',
    'react-native-snap-carousel',
    'pdfjs-dist',
    'react-native-tab-view',
    '@react-navigation/material-top-tabs',
    'react-native-pager-view',
    '@sanity/image-url',
  '@portabletext/react-native',
  'styled-components',
  '@portabletext/react',
  'react-native-web-webview',
    'react-native-webview',
    'react-native-blob-util',
  
  ],
   plugins: [
   new IgnorePlugin({
     resourceRegExp: /react-native-pdf/,
   }),
 ],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ttf|png|jpg|jpeg|svg|pdf)$/,
      loader: 'url-loader', // or directly file-loader
    },
    )

    config.module.rules.push(rule)

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons',
      'react-native-webview': 'react-native-web-webview',
'react-native-pdf$': 'react-pdf'
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
}

module.exports = withExpo(nextConfig)
