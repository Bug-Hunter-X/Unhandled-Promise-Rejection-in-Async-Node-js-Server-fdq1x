const http = require('http');

const server = http.createServer((req, res) => {
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function doSomethingAsync() {
  try {
    const random = Math.random();
    if (random < 0.5) {
      throw new Error('Something went wrong!');
    }
    return;
  } catch (error) {
    console.error('Error in doSomethingAsync:', error);
    throw error; // Re-throw the error to be handled by the outer catch block
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});