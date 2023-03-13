const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

// prettier-ignore
const pages = [
  'index',
  'about',
  'styleguide',
  'shortcuts',
  'selections',
  'shortcuts/switch-between-programs',
]

// prettier-ignore
const partials = [
  'analytics',
  'hotkeys',
  'menu',
  'menu-shortcut',
  'system-switch',
  'keyboard-win',
  'keyboard-mac',
  'modal',
  'footer',
]

module.exports = {
  entry: {
    index: './src/index.js',
    shortcuts: './src/shortcuts.jsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new CopyPlugin({
      patterns: [{from: 'src/share', to: 'share'}],
    }),

    ...pages.map((page) => {
      const pageName = `${page}.html`
      return new HtmlWebpackPlugin({
        hash: true,
        template: `./src/${pageName}`,
        filename: `./${pageName}`,
      })
    }),

    new HtmlWebpackPartialsPlugin(
      partials.map((partial) => ({
        path: path.join(__dirname, `./src/partials/${partial}.html`),
        location: `${partial}`,
        template_filename: '*',
        priority: 'replace',
      })),
    ),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
}
