import express from 'express';
import cors from 'cors';
import testRoute from './routes/test.route.js';
import transactionRoute from './routes/transaction.route.js';

const app = express();

app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

// Routes
app.use('/api', testRoute);
app.use('/api', transactionRoute);

export default app;