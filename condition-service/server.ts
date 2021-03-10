/* 
  Simple server with expressjs and typscript
*/
import express, { Request, Response } from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import * as conditions from './data/conditions.json';

const app = express();
app.use(cors());

//const port = process.env.PORT || 5000; // used when running without serverless

// root 
app.get('/', (req: Request, res: Response ) => {

  res.send('Hello from Server');
  
});

// call to get the conditions from json file
app.get('/api/condition', (req: Request, res: Response ) => {

   res.json(conditions)

});

//app.listen(port, () => console.log(`App is lestining on Port ${port}`)); // used when running without serverless

exports.handler = serverless(app); // to be used as the handler with serverless

