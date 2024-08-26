/*  1 ans  Server Setup:


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
*/

//2 ans Route Handling:


// Import the http module
const http = require('http');

// Define the port number
const PORT = 5000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the content type header
    res.setHeader('Content-Type', 'text/plain');

    // Route handling
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('This is the Home Page\n');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('This is the About Page\n');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('This is the Contact Page\n');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found\n');
    }
});

// Make the server listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
