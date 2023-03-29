import json
from jinja2 import Environment, FileSystemLoader

with open('src/lib/data/pages.json', 'r') as f:
    data = json.load(f)

env = Environment(loader=FileSystemLoader('src/lib/tasks/templates'))

template = env.get_template('page.html')

for item in data:
    context = {
        'title': item['title'],
        'h1_text': item['xl'],
        'h1_span_text': item['xl-span'],
        'div_class': item['filename'].replace('.html', ''),
        'h2_text': item['l']
    }
    output = template.render(context)

    with open(f"src/shortcuts/{item['filename']}", 'w') as f:
        f.write(output)
