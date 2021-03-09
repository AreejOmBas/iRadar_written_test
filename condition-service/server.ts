import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const db = {
  conditions: require("../data/conditions")
}

app.get('/', (req,res ) => {

  res.send('Hello from Server');
  
});

app.get('/api/condition', (req,res ) => {

   res.status(200).json(db.conditions)

});

//app.listen(port, () => console.log(`App is lestining on Port ${port}`));

exports.handler = serverless(app);
