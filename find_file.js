const https = require('https');
https.get('https://api.github.com/repos/DavidHDev/react-bits/git/trees/main?recursive=1', { headers: { 'User-Agent': 'node.js' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const tree = JSON.parse(data).tree;
      const files = tree.filter(f => f.path.includes('CircularGallery'));
      files.forEach(f => console.log(f.path));
    } catch (e) {
      console.error(e);
    }
  });
});
