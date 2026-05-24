import sys
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('â€”', '—').replace('â”€â”€â”€', '───').replace('css2─family', 'css2?family').replace('â”€', '─')
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
