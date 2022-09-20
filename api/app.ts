import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import paisRoutes from './routes';

const app = express();

//middeware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api',paisRoutes);

export default app;