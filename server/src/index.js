import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config/config';
import router from './router/router';

const app = express();

mongoose.connect(config.mongoUrl, () => {
  console.log("Database is now connected")
});



app.use(bodyParser.json());
app.use('/home', router);

app.listen(config.port, () => {
  console.log("The app is listening on the port 8080")
});
