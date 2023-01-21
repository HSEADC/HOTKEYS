const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
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

    ///////

    // Index (home page)
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      // chunks: ['index']
    }),

    // About us page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.html',
      filename: './about.html',
      // chunks: ['page']
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/landing.html',
      filename: './landing.html',
      // chunks: ['page']
    }),

    // Style Guide page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styleguide.html',
      filename: './styleguide.html',
      // chunks: ['page']
    }),

    // archive page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive.html',
      filename: './archive.html',
      // chunks: ['page']
    }),

    // Selections page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/selections.html',
      filename: './selections.html',
      // chunks: ['page']
    }),

    // Training page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/training.html',
      filename: './training.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/alt-tab.html',
      filename: './archive/alt-tab.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/cmd-tab.html',
      filename: './archive/cmd-tab.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/ctrl-z.html',
      filename: './archive/ctrl-z.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/cmd-z.html',
      filename: './archive/cmd-z.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/cmd-h.html',
      filename: './archive/cmd-h.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/cmd-o.html',
      filename: './archive/cmd-o.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/ctrl-w.html',
      filename: './archive/ctrl-w.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/win-d.html',
      filename: './archive/win-d.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/win-v.html',
      filename: './archive/win-v.html',
      // chunks: ['page']
    }),

    // archive Item page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/archive/alt-f4.html',
      filename: './archive/alt-f4.html',
      // chunks: ['page']
    }),

    //////

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace',
      },
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/form.html'),
        location: 'emailform',
        template_filename: '*',
        priority: 'replace',
      },
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/hotkeys.html'),
        location: 'hotkeys',
        template_filename: '*',
        priority: 'replace',
      },
    ]),

    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/modal.html'),
    //     location: 'modal',
    //     template_filename: '*',
    //     priority: 'replace',
    //   },
    // ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menu.html'),
        location: 'menu',
        template_filename: '*',
        priority: 'replace',
      },
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menu-item.html'),
        location: 'menu-item',
        template_filename: '*',
        priority: 'replace',
      },
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/windows.html'),
        location: 'windows',
        template_filename: '*',
        priority: 'replace',
      },
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/macos.html'),
        location: 'macos',
        template_filename: '*',
        priority: 'replace',
      },
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace',
      },
    ]),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
