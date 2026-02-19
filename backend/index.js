const http = require('http');
http.createServer((req, res) => res.end('Backend OK')).listen(3001);
console.log('Backend running on port 3001');
