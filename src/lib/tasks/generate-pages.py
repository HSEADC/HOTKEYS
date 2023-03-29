import json
from jinja2 import Environment, FileSystemLoader

with open('src/lib/data/hotkeys.json', 'r') as f:
    data = json.load(f)

env = Environment(loader=FileSystemLoader('src/lib/tasks/templates'))

template = env.get_template('shortcut.html')

for shortcuts in data:
    context = {
        'title': f"{shortcuts['page_title']} - HOTKEYS",
        'description': shortcuts['page_description'],
        'keywords': shortcuts['page_keywords'],
        'win_class': shortcuts['page_win'],
        'mac_class': shortcuts['page_mac'],
        'xl_span': shortcuts['page_xl_span'],
        'xl': shortcuts['page_xl'],
        'l_start': shortcuts['page_l_start'],
        'l_center': shortcuts['page_l_center'],
        'l_end': shortcuts['page_l_end'],
        'l_win_first': shortcuts['page_l_win_first'],
        'l_win_second': shortcuts['page_l_win_second'],
        'l_mac_first': shortcuts['page_l_mac_first'],
        'l_mac_second': shortcuts['page_l_mac_second'],
    }
    output = template.render(context)

    with open(f"src/shortcuts/{shortcuts['link']}.html", 'w') as f:
        f.write(output)

