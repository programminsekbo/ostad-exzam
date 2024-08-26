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

/*2 ans Route Handling:


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
*/




//3 ans File Operations:

// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Define the port number
const PORT = 5050;

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
    } else if (req.url === '/file-write') {
        // Handle the /file-write route
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.statusCode = 500; // Internal Server Error
                res.end('Failed to write file\n');
            } else {
                res.statusCode = 200;
                res.end('File written successfully: demo.txt\n');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Page Not Found\n');
    }
});

// Make the server listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

