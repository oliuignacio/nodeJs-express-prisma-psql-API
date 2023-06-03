////////////////////////
// Express Server///////
////////////////////////

import express from 'express';
import router from './router';

const app = express();


app.get('/', (req, res)=> {
  console.log("Hello from express");
  res.status(200);
  res.json({message:"Hello"})
  res.end;
  
} )

app.use('/api', router);

export default app;

////////////////////////
// Node Js Server///////
////////////////////////

// const http = require('http');

// const server = http.createServer (( req, res ) => {
//   if (req.url === '/' && req.method === 'GET') {
//     console.log('Request received');
//     res.statusCode = 200;
//     res.statusMessage = 'OK...';
//     res.end('Welcome to our home page');
//   }
// });

// server.listen(3001, () => {
//   console.log('Server is listening on port 3001');
// });