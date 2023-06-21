const fs = require('fs')
const {SitemapStream, streamToPromise} = require('sitemap')
const {Readable} = require('stream')

const pages = [
  {name: 'index', priority: 1.0},
  {name: 'shortcuts', priority: 0.8},
  {name: 'about', priority: 0.8},
  {name: 'styleguide', priority: 0.8},
  {name: 'selections', priority: 0.8},
  {name: '404', priority: 0.25},
  {name: 'selections/top-5-documents-shortcuts', priority: 0.5},
  {name: 'selections/simple-browser-shortcuts', priority: 0.5},
  {name: 'selections/top-5-users-shortcuts', priority: 0.5},
  {name: 'selections/useful-designer-shortcuts', priority: 0.5},
  {name: 'selections/useful-developer-shortcuts', priority: 0.5},
  {name: 'shortcuts/switch-between-programs', priority: 0.5},
  {name: 'shortcuts/hide-open-program', priority: 0.5},
  {name: 'shortcuts/open-clipboard', priority: 0.5},
  {name: 'shortcuts/redo-last-action', priority: 0.5},
  {name: 'shortcuts/undo-last-action', priority: 0.5},
  {name: 'shortcuts/redo-undo-last-action', priority: 0.5},
  {name: 'shortcuts/cut-selected-text', priority: 0.5},
  {name: 'shortcuts/copy-selected-text', priority: 0.5},
  {name: 'shortcuts/paste-selected-text', priority: 0.5},
  {name: 'shortcuts/open-file-explorer', priority: 0.5},
  {name: 'shortcuts/select-all', priority: 0.5},
  {name: 'shortcuts/save', priority: 0.5},
  {name: 'shortcuts/print', priority: 0.5},
  {name: 'shortcuts/new-window', priority: 0.5},
  {name: 'shortcuts/open-settings', priority: 0.5},
  {name: 'shortcuts/minimize-window', priority: 0.5},
  {name: 'shortcuts/maximize-window', priority: 0.5},
  {name: 'shortcuts/close-window', priority: 0.5},
  {name: 'shortcuts/close-program', priority: 0.5},
  {name: 'shortcuts/vscode-comment', priority: 0.5},
  {name: 'shortcuts/vscode-find-selected', priority: 0.5},
  {name: 'shortcuts/vscode-find-replace-selected', priority: 0.5},
  {name: 'shortcuts/vscode-find-all-project', priority: 0.5},
  {name: 'shortcuts/vscode-find-replace-all-project', priority: 0.5},
  {name: 'shortcuts/vscode-toggle-sidebar', priority: 0.5},
  {name: 'shortcuts/vscode-select-next-occurrence', priority: 0.5},
  {name: 'shortcuts/vscode-command-palette', priority: 0.5},
  {name: 'shortcuts/browser-open-new-window', priority: 0.5},
  {name: 'shortcuts/browser-open-new-incognito-window', priority: 0.5},
  {name: 'shortcuts/browser-open-new-tab', priority: 0.5},
  {name: 'shortcuts/browser-undo-closed-tab', priority: 0.5},
  {name: 'shortcuts/browser-next-tab', priority: 0.5},
  {name: 'shortcuts/browser-history-back-forward', priority: 0.5},
  {name: 'shortcuts/browser-refresh-page', priority: 0.5},
  {name: 'shortcuts/browser-open-history', priority: 0.5},
  {name: 'shortcuts/figma-group-layers', priority: 0.5},
  {name: 'shortcuts/figma-ungroup-layers', priority: 0.5},
  {name: 'shortcuts/figma-frame-layers', priority: 0.5},
  {name: 'shortcuts/figma-duplicate-selection', priority: 0.5},
  {name: 'shortcuts/figma-hide-ui', priority: 0.5},
  {name: 'shortcuts/figma-hide-layers', priority: 0.5},
  {name: 'shortcuts/figma-pick-color', priority: 0.5},
  {name: 'shortcuts/figma-command-palette', priority: 0.5},
]

const hostname = 'https://hotkeys.adc.ac'
const lastmod = new Date().toISOString()

const links = pages.map((page) => ({
  url: `${hostname}/${page.name}.html`,
  changefreq: 'daily',
  priority: page.priority,
  lastmod,
}))

const stream = new SitemapStream({hostname})

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync('./sitemap.xml', data.toString())
    console.log('Sitemap generation complete!')
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error)
  })
