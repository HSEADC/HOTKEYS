const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const pages = [
  {name: 'index', chunks: ['index', 'on_scroll']},
  {name: 'about', chunks: ['index']},
  {name: 'styleguide', chunks: ['index', 'on_scroll']},
  {name: 'selections', chunks: ['index']},
  {name: 'selections/top-5-documents-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/simple-browser-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/top-5-users-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/useful-designer-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/useful-developer-shortcuts', chunks: ['index', 'switch']},
  {name: 'shortcuts', chunks: ['index', 'shortcuts']},
  {name: 'shortcuts/switch-between-programs', chunks: ['index', 'switch']},
  {name: 'shortcuts/hide-open-program', chunks: ['index', 'switch']},
  {name: 'shortcuts/open-clipboard', chunks: ['index', 'switch']},
  {name: 'shortcuts/redo-last-action', chunks: ['index', 'switch']},
  {name: 'shortcuts/undo-last-action', chunks: ['index', 'switch']},
  {name: 'shortcuts/redo-undo-last-action', chunks: ['index', 'switch']},
  {name: 'shortcuts/cut-selected-text', chunks: ['index', 'switch']},
  {name: 'shortcuts/copy-selected-text', chunks: ['index', 'switch']},
  {name: 'shortcuts/paste-selected-text', chunks: ['index', 'switch']},
  {name: 'shortcuts/open-file-explorer', chunks: ['index', 'switch']},
  {name: 'shortcuts/select-all', chunks: ['index', 'switch']},
  {name: 'shortcuts/save', chunks: ['index', 'switch']},
  {name: 'shortcuts/print', chunks: ['index', 'switch']},
  {name: 'shortcuts/new-window', chunks: ['index', 'switch']},
  {name: 'shortcuts/open-settings', chunks: ['index', 'switch']},
  {name: 'shortcuts/minimize-window', chunks: ['index', 'switch']},
  {name: 'shortcuts/maximize-window', chunks: ['index', 'switch']},
  {name: 'shortcuts/close-window', chunks: ['index', 'switch']},
  {name: 'shortcuts/close-program', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-comment', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-find-selected', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-find-replace-selected', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-find-all-project', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-find-replace-all-project', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-toggle-sidebar', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-select-next-occurrence', chunks: ['index', 'switch']},
  {name: 'shortcuts/vscode-command-palette', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-open-new-window', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-open-new-incognito-window', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-open-new-tab', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-undo-closed-tab', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-next-tab', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-history-back-forward', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-refresh-page', chunks: ['index', 'switch']},
  {name: 'shortcuts/browser-open-history', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-group-layers', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-ungroup-layers', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-frame-layers', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-duplicate-selection', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-hide-ui', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-hide-layers', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-pick-color', chunks: ['index', 'switch']},
  {name: 'shortcuts/figma-command-palette', chunks: ['index', 'switch']},
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
    on_scroll: './src/javascript/on-scroll.js',
    shortcuts: './src/shortcuts.jsx',
    switch: './src/javascript/system-switch.js',
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
      const pageName = `${page.name}.html`
      return new HtmlWebpackPlugin({
        hash: true,
        template: `./src/${pageName}`,
        filename: `./${pageName}`,
        chunks: page.chunks,
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
