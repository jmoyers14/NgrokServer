import express from 'express';
import { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log('Received GET request');
    res.send('Hello from webhook test server!');
});

app.post('/', (req: Request, res: Response) => {
    console.log('Received POST request with body:', req.body);
    res.json({
        status: 'success',
        message: 'Webhook received!',
        receivedData: req.body
    });
});

export default app;
