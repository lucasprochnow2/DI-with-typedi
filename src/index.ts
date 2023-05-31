import 'reflect-metadata';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { Container } from 'typedi';

import RestRouters from './routes';

const app: Application = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Container.set('expressServer', app);

const restRouters = Container.get(RestRouters);
restRouters.initialize();

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
