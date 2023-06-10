import * as dotenv from 'dotenv'
dotenv.config() // this will look dotenv file and load it on environment and now you can access through process.env

import app from './server'

app.listen(3001, () => {
  console.log("hello on http://localhost:3001");
});


