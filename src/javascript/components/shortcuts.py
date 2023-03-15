import json
import fileinput
import shutil

source_file = 'src/javascript/components/shortcuts.html'
destination_file = 'src/shortcuts.html'

shutil.copyfile(source_file, destination_file)

with open('src/javascript/components/hotkeys.json') as f:
    hotkeys = json.load(f)

html = ''
for d in hotkeys:
    html += f"""
        <div class="M_ShortcutCard Render">
            <a href="{d['link']}">
                <h1 class="A_CardName"><span class="Q_TextSelection">{d['selected']} </span> {d['text']}</h1>
                <h2 class="A_CardKey">Windows: {d['windows']}, MacOS: {d['macos']}</h2>
            </a>
        </div>
    """
html += ''

for line in fileinput.input(destination_file, inplace=True):
    if 'id="PYTHON_REPLACE"' in line:
        print(html)
    else:
        print(line, end='')
