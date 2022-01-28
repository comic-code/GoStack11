import express from 'express';
import { helloFriend } from './routes';

const app = express();

app.get('/', helloFriend);

app.listen(3333);