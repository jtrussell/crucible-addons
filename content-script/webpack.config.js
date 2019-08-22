const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../extension/content-script/lib')
  }
};
