import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { authorize } from './modules/auth';
import { createUser, signin } from '@/handlers/user';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello, world!'});
});

app.use('/api', authorize, router);

app.post('/user', createUser);
app.post('/signin', signin);

export default app;
