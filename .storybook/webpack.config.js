const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve('react-docgen-typescript-loader')
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
        }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
