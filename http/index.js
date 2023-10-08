/*const http = require('http');
const colors = require('colors')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); //Codigos de estado http 200 = Ok
  res.write(`<h1>Hello world from a Server NodeJs</h1>`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is working!'.yellow);
});
*/


//Test Express

const  express = require('express');
const colors = require('colors')

const server = express();

server.get('/', function(req, res){
  res.send('<h1>Hola mundo con Express y NodeJs</h1>');
  res.end();
})

server.listen(3000, () => {
  console.log('Server on port 3000'.red)
})