// server-with-ngrok.ts
import app from './app';
import ngrok from 'ngrok'

const port = 3030;

const startServer = async () => {
    app.listen(port, async () => {
        console.log(`Server running at http://localhost:${port}`);
        
        try {
            const url = await ngrok.connect(port);
            console.log(`Ngrok tunnel created at: ${url}`);
        } catch (err) {
            console.error('Error creating ngrok tunnel:', err);
        }
    });
}

startServer();
