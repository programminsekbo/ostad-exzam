//1 ans  Server Setup:


// Import the http module
const http = require('http');

// Define the port number
const PORT = 5500;

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// Make the server listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
