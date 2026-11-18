const fs = require('fs');
const data = fs.readFileSync('../vortex-sketch/pages/51F0DB9A-2ED7-4703-9DA1-0C2F19B37C99.json', 'utf8');
const idx = data.indexOf('Vector 291');
console.log(data.substring(idx - 100, idx + 800));
