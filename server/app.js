import express from 'express';
import cors from 'cors';
import testRoute from './routes/test.route.js';


const app = express();

app.use(cors({origin: 'http://localhost:5173'}));
app.use('/api', testRoute);
app.use(express.json());


export default app;