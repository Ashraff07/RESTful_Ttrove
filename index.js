const express = require('express');
const app = express();
const path = require('path');
const PORT = 8090;

app.listen(
    PORT,
    () => console.log(`Server is live on http://localhost:${PORT}`)
);

app.get('/tshirt', (req, res) => {
    const filePath = path.join(__dirname, 'tshirt.json');
    res.status(200).sendFile(filePath);
});

app.get('/hoodies', (req, res) => {
    const filePath = path.join(__dirname, 'hoodies.json');
    res.status(200).sendFile(filePath);
});
