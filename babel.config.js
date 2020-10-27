module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          navigators: './src/navigators',
          components: './src/components',
          controllers: './src/controllers',
          models: './src/models',
          styles: './src/styles',
          data: './src/data',
          src: './src',
          colors: './colors',
        },
      },
    ],
  ],
  };
};

