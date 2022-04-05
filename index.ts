import api from './routes/router';
import { Request, Response } from 'express';

require('dotenv').config();
const PORT = process.env.PORT || 65534;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const express = require('express');
const cookieParser = require('cookie-parser');
const promisifyExpress = require('promisify-express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

promisifyExpress(app);

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use('/', api);
//
// console.log('SMTP_USER',process.env.SMTP_USER);
// console.log('SMTP_PASSWORD',process.env.SMTP_PASSWORD);
// console.log('npm_package_name',process.env.npm_package_name);

app.all('*', (req: Request, res: Response) => {
  res.sendStatus(404);
});


const start = async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();