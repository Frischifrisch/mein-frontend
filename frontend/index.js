const http = require('http');
http.createServer((req, res) => res.end('Frontend OK')).listen(3000);
console.log('Frontend running on port 3000');
