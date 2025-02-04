const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    // Error handling inside the promise chain 
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate a scenario where an exception is thrown in async function
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
  return;
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});