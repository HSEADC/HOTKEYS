const fs = require('fs')
const {SitemapStream, streamToPromise} = require('sitemap')
const {Readable} = require('stream')

const pages = [
  {name: 'index', chunks: ['index', 'landing']},
  {name: 'shortcuts', chunks: ['index', 'switch', 'shortcuts']},
  {name: 'about', chunks: ['index']},
  {name: 'styleguide', chunks: ['index']},
  {name: 'selections', chunks: ['index']},
  {name: '404', chunks: ['index']},
  {name: 'selections/top-5-documents-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/simple-browser-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/top-5-users-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/useful-designer-shortcuts', chunks: ['index', 'switch']},
  {name: 'selections/useful-developer-shortcuts', chunks: ['index', 'switch']},
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

const links = pages.map((page) => ({
  url: `/${page.name}/`,
  changefreq: 'daily',
  priority: 0.3,
}))

const stream = new SitemapStream({hostname: 'https://hotkeys.adc.ac'})

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync('./sitemap.xml', data.toString())
    console.log('Sitemap generation complete!')
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error)
  })
