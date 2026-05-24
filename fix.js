const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');
content = content.replace(/â€”/g, '—').replace(/â”€â”€â”€/g, '───').replace(/css2─family/g, 'css2?family').replace(/â”€/g, '─');
fs.writeFileSync('index.html', content, 'utf-8');
