////////////////////////
// Express Server///////
////////////////////////

import express, { NextFunction, Request, Response } from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json()); //allows a client to send json
app.use(express.urlencoded({extended: true})); // allows a client to send a query string like 'google.com?a=1,thing=otherthing'

app.get('/', (req: Request, res: Response)=> {
  console.log("Hello from express");
  res.status(200);
  res.json({message:"Hello"})
  res.end;
  
} )

app.use('/api', protect, router);
app.post('/user', createNewUser)
app.post('/signin', signin)

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