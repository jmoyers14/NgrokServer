import app from './app';

const port = 3030;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
